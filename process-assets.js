const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const BASE_DIR = path.join(__dirname, 'arc-assets');
const SHARED_ASSETS_DIR = path.join(BASE_DIR, '_shared');
const ASSETS_MAP_FILE = path.join(BASE_DIR, '_assets-map.json');
const downloadedAssets = new Map();
const failedDownloads = [];

// Load assets map from file (persist across runs)
function loadAssetsMap() {
  if (fs.existsSync(ASSETS_MAP_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(ASSETS_MAP_FILE, 'utf8'));
      return new Map(data.map(([url, filePath]) => [url, filePath]));
    } catch (e) {
      return new Map();
    }
  }
  return new Map();
}

// Save assets map to file
function saveAssetsMap() {
  const data = Array.from(downloadedAssets.entries());
  fs.writeFileSync(ASSETS_MAP_FILE, JSON.stringify(data, null, 2));
}

// Initialize assets map
const existingMap = loadAssetsMap();
existingMap.forEach((filePath, url) => {
  downloadedAssets.set(url, filePath);
});

// Create shared assets directories
fs.mkdirSync(path.join(SHARED_ASSETS_DIR, 'images'), { recursive: true });
fs.mkdirSync(path.join(SHARED_ASSETS_DIR, 'videos'), { recursive: true });

// Normalize URL - also create a canonical version for duplicate detection
function normalizeUrl(url, baseUrl = 'https://arc.dev') {
  if (!url) return null;
  if (url.startsWith('data:') || url.startsWith('blob:')) return null;
  
  try {
    if (url.startsWith('//')) {
      url = 'https:' + url;
    } else if (url.startsWith('/')) {
      url = baseUrl + url;
    } else if (!url.startsWith('http')) {
      url = new URL(url, baseUrl).href;
    }
    
    // Only include arc.dev assets
    if (url.includes('arc.dev') || url.includes('cdn.arc.dev')) {
      return url;
    }
    return null;
  } catch (e) {
    return null;
  }
}

// Get canonical URL for duplicate detection (remove query params, normalize)
function getCanonicalUrl(url) {
  try {
    const urlObj = new URL(url);
    // For Next.js Image URLs, extract the actual image URL from the query param
    if (urlObj.pathname.includes('_next/image') && urlObj.searchParams.has('url')) {
      const actualUrl = urlObj.searchParams.get('url');
      if (actualUrl) {
        try {
          const decoded = decodeURIComponent(actualUrl);
          const actualUrlObj = new URL(decoded);
          // Return the base URL without query params for duplicate detection
          return actualUrlObj.origin + actualUrlObj.pathname;
        } catch (e) {
          // Fallback to original
        }
      }
    }
    // For regular URLs, remove query params for duplicate detection
    return urlObj.origin + urlObj.pathname;
  } catch (e) {
    return url.split('?')[0]; // Simple fallback
  }
}

// Get page folder
function getPageFolder(pageUrl) {
  const urlObj = new URL(pageUrl);
  let pathname = urlObj.pathname;
  
  if (pathname === '/') {
    pathname = '/index';
  }
  
  pathname = pathname.replace(/\/$/, '');
  const folderPath = path.join(BASE_DIR, pathname);
  fs.mkdirSync(folderPath, { recursive: true });
  return folderPath;
}

// Get filename from URL
function getFileName(url, index = 0) {
  try {
    const urlObj = new URL(url);
    let fileName = path.basename(urlObj.pathname);
    
    // Remove query params but keep extension
    fileName = fileName.split('?')[0];
    
    // If no extension, try to get from URL or use default
    if (!path.extname(fileName)) {
      const extMatch = url.match(/\.(jpg|jpeg|png|gif|webp|svg|mp4|webm|mov|avi)(\?|$)/i);
      if (extMatch) {
        fileName = `file${extMatch[1]}`;
      } else {
        // Try to determine from content-type or use .jpg as default
        fileName = 'image.jpg';
      }
    }
    
    // If filename is generic (like image.jpg), create unique name from URL
    if (fileName === 'image.jpg' || fileName === 'file.jpg' || !fileName || fileName.length < 5) {
      // Create hash from URL for uniqueness
      const crypto = require('crypto');
      const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);
      const ext = path.extname(fileName) || '.jpg';
      fileName = `image_${hash}${ext}`;
    }
    
    // Try to extract meaningful name from URL path
    const pathParts = urlObj.pathname.split('/').filter(p => p);
    if (pathParts.length > 0) {
      const lastPart = pathParts[pathParts.length - 1];
      if (lastPart && lastPart.length > 3 && lastPart.includes('.')) {
        const ext = path.extname(lastPart) || path.extname(fileName);
        const name = lastPart.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9_-]/g, '_');
        if (name.length > 3) {
          fileName = name + ext;
        }
      }
    }
    
    // Sanitize filename
    fileName = fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
    
    // If filename is too long, truncate but keep extension
    if (fileName.length > 200) {
      const ext = path.extname(fileName);
      const nameWithoutExt = fileName.substring(0, fileName.length - ext.length);
      fileName = nameWithoutExt.substring(0, 200 - ext.length) + ext;
    }
    
    return fileName;
  } catch (e) {
    // Fallback: use hash
    const crypto = require('crypto');
    const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);
    return `file_${hash}.jpg`;
  }
}

// Download file with duplicate detection
function downloadFile(url, filePath, isShared = false) {
  return new Promise((resolve, reject) => {
    // Check if already downloaded (by exact URL)
    if (downloadedAssets.has(url)) {
      const existingPath = downloadedAssets.get(url);
      try {
        if (!fs.existsSync(filePath)) {
          // Copy from existing location
          fs.copyFileSync(existingPath, filePath);
        }
        resolve();
        return;
      } catch (e) {
        // Continue to download if copy fails
      }
    }
    
    // Check by canonical URL (for duplicate detection across different query params)
    const canonicalUrl = getCanonicalUrl(url);
    let foundDuplicate = false;
    for (const [existingUrl, existingPath] of downloadedAssets.entries()) {
      if (getCanonicalUrl(existingUrl) === canonicalUrl && fs.existsSync(existingPath)) {
        try {
          if (!fs.existsSync(filePath)) {
            fs.copyFileSync(existingPath, filePath);
          }
          // Also add this URL variant to the map
          downloadedAssets.set(url, filePath);
          if (!isShared) {
            saveAssetsMap();
          }
          resolve();
          foundDuplicate = true;
          return;
        } catch (e) {
          // Continue if copy fails
        }
      }
    }
    
    if (foundDuplicate) {
      return;
    }

    const file = fs.createWriteStream(filePath);
    const protocol = url.startsWith('https') ? https : http;
    
    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': '*/*'
      },
      timeout: 30000
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
        if (!isShared) {
          saveAssetsMap();
        }
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

// Process assets for a page
async function processPageAssets(pageUrl, rawAssets) {
  console.log(`\n📄 Processing: ${pageUrl}`);
  
  // Normalize URLs
  const normalizedImages = new Set();
  const normalizedVideos = new Set();
  
  // Normalize images
  for (const imgUrl of rawAssets.images || []) {
    const normalized = normalizeUrl(imgUrl, pageUrl);
    if (normalized) {
      normalizedImages.add(normalized);
    }
  }
  
  // Normalize videos
  for (const videoUrl of rawAssets.videos || []) {
    const normalized = normalizeUrl(videoUrl, pageUrl);
    if (normalized) {
      normalizedVideos.add(normalized);
    }
  }
  
  const images = Array.from(normalizedImages);
  const videos = Array.from(normalizedVideos);
  
  console.log(`  Found: ${images.length} images, ${videos.length} videos`);
  
  // Create folder structure
  const pageFolder = getPageFolder(pageUrl);
  const imagesFolder = path.join(pageFolder, 'images');
  const videosFolder = path.join(pageFolder, 'videos');
  fs.mkdirSync(imagesFolder, { recursive: true });
  fs.mkdirSync(videosFolder, { recursive: true });
  
  // Download images with duplicate detection
  const imageResults = [];
  const sharedImagesFolder = path.join(SHARED_ASSETS_DIR, 'images');
  
  for (let i = 0; i < images.length; i++) {
    const imgUrl = images[i];
    try {
      const fileName = getFileName(imgUrl, i);
      const filePath = path.join(imagesFolder, fileName);
      
      // Check for duplicate in shared folder first
      const canonicalUrl = getCanonicalUrl(imgUrl);
      let isDuplicate = false;
      let sharedFilePath = null;
      
      // Check if we already have this asset (by canonical URL)
      for (const [existingUrl, existingPath] of downloadedAssets.entries()) {
        if (getCanonicalUrl(existingUrl) === canonicalUrl && fs.existsSync(existingPath)) {
          sharedFilePath = existingPath;
          isDuplicate = true;
          break;
        }
      }
      
      if (isDuplicate && sharedFilePath) {
        // Copy from shared/existing location
        if (!fs.existsSync(filePath)) {
          fs.copyFileSync(sharedFilePath, filePath);
        }
        imageResults.push({ 
          url: imgUrl, 
          file: fileName, 
          success: true, 
          skipped: true,
          duplicate: true,
          source: sharedFilePath 
        });
        // Add to map
        downloadedAssets.set(imgUrl, filePath);
        continue;
      }
      
      // Skip if already exists locally
      if (fs.existsSync(filePath)) {
        imageResults.push({ url: imgUrl, file: fileName, success: true, skipped: true });
        downloadedAssets.set(imgUrl, filePath);
        continue;
      }
      
      // Download to shared folder first, then copy to page folder
      const sharedFileName = getFileName(imgUrl, i);
      const sharedPath = path.join(sharedImagesFolder, sharedFileName);
      
      // Download to shared location if not exists
      if (!fs.existsSync(sharedPath)) {
        await downloadFile(imgUrl, sharedPath, true);
      }
      
      // Copy to page folder
      if (!fs.existsSync(filePath)) {
        fs.copyFileSync(sharedPath, filePath);
      }
      
      downloadedAssets.set(imgUrl, filePath);
      imageResults.push({ url: imgUrl, file: fileName, success: true });
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (err) {
      console.error(`  ❌ Failed image: ${imgUrl.substring(0, 60)}...`);
      imageResults.push({ url: imgUrl, error: err.message, success: false });
      failedDownloads.push({ url: imgUrl, type: 'image', error: err.message });
    }
  }
  
  // Download videos with duplicate detection
  const videoResults = [];
  const sharedVideosFolder = path.join(SHARED_ASSETS_DIR, 'videos');
  
  for (const videoUrl of videos) {
    try {
      const fileName = getFileName(videoUrl);
      const filePath = path.join(videosFolder, fileName);
      
      // Check for duplicate
      const canonicalUrl = getCanonicalUrl(videoUrl);
      let isDuplicate = false;
      let sharedFilePath = null;
      
      for (const [existingUrl, existingPath] of downloadedAssets.entries()) {
        if (getCanonicalUrl(existingUrl) === canonicalUrl && fs.existsSync(existingPath)) {
          sharedFilePath = existingPath;
          isDuplicate = true;
          break;
        }
      }
      
      if (isDuplicate && sharedFilePath) {
        if (!fs.existsSync(filePath)) {
          fs.copyFileSync(sharedFilePath, filePath);
        }
        videoResults.push({ 
          url: videoUrl, 
          file: fileName, 
          success: true, 
          skipped: true,
          duplicate: true,
          source: sharedFilePath 
        });
        downloadedAssets.set(videoUrl, filePath);
        continue;
      }
      
      // Skip if already exists locally
      if (fs.existsSync(filePath)) {
        videoResults.push({ url: videoUrl, file: fileName, success: true, skipped: true });
        downloadedAssets.set(videoUrl, filePath);
        continue;
      }
      
      // Download to shared folder first
      const sharedFileName = getFileName(videoUrl);
      const sharedPath = path.join(sharedVideosFolder, sharedFileName);
      
      if (!fs.existsSync(sharedPath)) {
        await downloadFile(videoUrl, sharedPath, true);
      }
      
      // Copy to page folder
      if (!fs.existsSync(filePath)) {
        fs.copyFileSync(sharedPath, filePath);
      }
      
      downloadedAssets.set(videoUrl, filePath);
      videoResults.push({ url: videoUrl, file: fileName, success: true });
      
      // Longer delay for videos
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (err) {
      console.error(`  ❌ Failed video: ${videoUrl.substring(0, 60)}...`);
      videoResults.push({ url: videoUrl, error: err.message, success: false });
      failedDownloads.push({ url: videoUrl, type: 'video', error: err.message });
    }
  }
  
  // Save metadata
  const metadata = {
    pageUrl,
    images: {
      total: images.length,
      successful: imageResults.filter(r => r.success).length,
      failed: imageResults.filter(r => !r.success).length,
      skipped: imageResults.filter(r => r.skipped).length,
      list: imageResults
    },
    videos: {
      total: videos.length,
      successful: videoResults.filter(r => r.success).length,
      failed: videoResults.filter(r => !r.success).length,
      skipped: videoResults.filter(r => r.skipped).length,
      list: videoResults
    },
    timestamp: new Date().toISOString()
  };
  
  fs.writeFileSync(
    path.join(pageFolder, 'metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
  
  console.log(`  ✅ Downloaded: ${metadata.images.successful} images, ${metadata.videos.successful} videos`);
  
  return metadata;
}

// Save assets map on exit
process.on('exit', () => {
  saveAssetsMap();
});
process.on('SIGINT', () => {
  saveAssetsMap();
  process.exit();
});

module.exports = {
  processPageAssets,
  normalizeUrl,
  getCanonicalUrl,
  getPageFolder,
  BASE_DIR,
  SHARED_ASSETS_DIR,
  downloadedAssets,
  failedDownloads,
  saveAssetsMap,
  loadAssetsMap
};

