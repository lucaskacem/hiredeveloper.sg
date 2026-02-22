const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Danh sách tất cả các pages
const allPages = require('./download-assets-with-scroll').allPages;

const BASE_DIR = path.join(__dirname, 'arc-assets');
const downloadedAssets = new Map();
const failedDownloads = [];

// Tạo folder structure cho mỗi page
function getPageFolder(url) {
  const urlObj = new URL(url);
  let pathname = urlObj.pathname;
  
  if (pathname === '/') {
    pathname = '/index';
  }
  
  pathname = pathname.replace(/\/$/, '');
  const folderPath = path.join(BASE_DIR, pathname);
  fs.mkdirSync(folderPath, { recursive: true });
  return folderPath;
}

// Download file
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    if (downloadedAssets.has(url)) {
      const existingPath = downloadedAssets.get(url);
      try {
        if (!fs.existsSync(filePath)) {
          fs.copyFileSync(existingPath, filePath);
        }
        resolve();
        return;
      } catch (e) {}
    }

    const file = fs.createWriteStream(filePath);
    const protocol = url.startsWith('https') ? https : http;
    
    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        downloadFile(response.headers.location, filePath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        downloadedAssets.set(url, filePath);
        resolve();
      });
    });
    
    request.on('error', (err) => {
      file.close();
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      reject(err);
    });
    
    request.setTimeout(30000, () => {
      request.destroy();
      file.close();
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      reject(new Error('Timeout'));
    });
  });
}

function getFileName(url, defaultName = 'file') {
  try {
    const urlObj = new URL(url);
    let fileName = path.basename(urlObj.pathname);
    fileName = fileName.split('?')[0];
    
    if (!path.extname(fileName)) {
      const ext = url.match(/\.(jpg|jpeg|png|gif|webp|svg|mp4|webm|mov|avi)(\?|$)/i);
      if (ext) {
        fileName = defaultName + ext[1];
      } else {
        fileName = defaultName + '.jpg';
      }
    }
    
    fileName = fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
    return fileName;
  } catch (e) {
    return defaultName + '.jpg';
  }
}

// Save assets for a page
async function saveAssetsForPage(pageUrl, assets) {
  const pageFolder = getPageFolder(pageUrl);
  
  const imagesFolder = path.join(pageFolder, 'images');
  const videosFolder = path.join(pageFolder, 'videos');
  fs.mkdirSync(imagesFolder, { recursive: true });
  fs.mkdirSync(videosFolder, { recursive: true });
  
  const imageResults = [];
  for (const imgUrl of assets.images) {
    try {
      const fileName = getFileName(imgUrl, 'image');
      const filePath = path.join(imagesFolder, fileName);
      
      await downloadFile(imgUrl, filePath);
      imageResults.push({ url: imgUrl, file: fileName, success: true });
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (err) {
      imageResults.push({ url: imgUrl, error: err.message, success: false });
      failedDownloads.push({ url: imgUrl, type: 'image', error: err.message });
    }
  }
  
  const videoResults = [];
  for (const videoUrl of assets.videos) {
    try {
      const fileName = getFileName(videoUrl, 'video');
      const filePath = path.join(videosFolder, fileName);
      
      await downloadFile(videoUrl, filePath);
      videoResults.push({ url: videoUrl, file: fileName, success: true });
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (err) {
      videoResults.push({ url: videoUrl, error: err.message, success: false });
      failedDownloads.push({ url: videoUrl, type: 'video', error: err.message });
    }
  }
  
  const metadata = {
    pageUrl,
    images: {
      total: assets.images.length,
      successful: imageResults.filter(r => r.success).length,
      failed: imageResults.filter(r => !r.success).length,
      list: imageResults
    },
    videos: {
      total: assets.videos.length,
      successful: videoResults.filter(r => r.success).length,
      failed: videoResults.filter(r => !r.success).length,
      list: videoResults
    },
    timestamp: new Date().toISOString()
  };
  
  fs.writeFileSync(
    path.join(pageFolder, 'metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
  
  return metadata;
}

// Export
module.exports = {
  allPages,
  saveAssetsForPage,
  BASE_DIR,
  downloadedAssets,
  failedDownloads
};

// Script để extract assets từ Chrome DevTools
const extractScript = `
(() => {
  const assets = { images: new Set(), videos: new Set() };
  
  // Get all images
  document.querySelectorAll('img').forEach(img => {
    if (img.src && !img.src.startsWith('data:')) {
      assets.images.add(img.src);
    }
    if (img.srcset) {
      img.srcset.split(',').forEach(src => {
        const url = src.trim().split(' ')[0];
        if (url && !url.startsWith('data:')) {
          assets.images.add(url);
        }
      });
    }
    if (img.dataset.src) {
      assets.images.add(img.dataset.src);
    }
  });
  
  // Get all videos
  document.querySelectorAll('video').forEach(video => {
    if (video.src && !video.src.startsWith('data:')) {
      assets.videos.add(video.src);
    }
    video.querySelectorAll('source').forEach(source => {
      if (source.src && !source.src.startsWith('data:')) {
        assets.videos.add(source.src);
      }
    });
  });
  
  // Get background images
  document.querySelectorAll('*').forEach(el => {
    const style = window.getComputedStyle(el);
    const bgImage = style.backgroundImage;
    if (bgImage && bgImage !== 'none') {
      const match = bgImage.match(/url\\(["']?([^"')]+)["']?\\)/);
      if (match && match[1] && !match[1].startsWith('data:')) {
        assets.images.add(match[1]);
      }
    }
  });
  
  // Get lazy loaded images
  document.querySelectorAll('[data-src], [data-lazy-src], [data-bg]').forEach(el => {
    const src = el.getAttribute('data-src') || el.getAttribute('data-lazy-src') || el.getAttribute('data-bg');
    if (src && !src.startsWith('data:')) {
      assets.images.add(src);
    }
  });
  
  // Filter only arc.dev assets
  const filteredImages = Array.from(assets.images).filter(url => 
    url.includes('arc.dev') || url.includes('cdn.arc.dev')
  );
  const filteredVideos = Array.from(assets.videos).filter(url => 
    url.includes('arc.dev') || url.includes('cdn.arc.dev')
  );
  
  return {
    images: filteredImages,
    videos: filteredVideos
  };
})()
`;

module.exports.extractScript = extractScript;

