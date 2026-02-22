const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Danh sách tất cả các pages
const allPages = [
  "https://arc.dev/",
  "https://arc.dev/about-us",
  "https://arc.dev/clients",
  "https://arc.dev/companies",
  "https://arc.dev/cookies",
  "https://arc.dev/development-services",
  "https://arc.dev/employer-blog",
  "https://arc.dev/employer-blog/",
  "https://arc.dev/employer-blog/baxus-arc-case-study/",
  "https://arc.dev/employer-blog/category/case-studies/",
  "https://arc.dev/employer-blog/pathrise-case-study/",
  "https://arc.dev/employer-blog/stem-hiring-global-talent-with-arc/",
  "https://arc.dev/en-ar",
  "https://arc.dev/en-au",
  "https://arc.dev/en-be",
  "https://arc.dev/en-br",
  "https://arc.dev/en-ca",
  "https://arc.dev/en-ch",
  "https://arc.dev/en-cl",
  "https://arc.dev/en-cn",
  "https://arc.dev/en-co",
  "https://arc.dev/en-de",
  "https://arc.dev/en-dk",
  "https://arc.dev/en-es",
  "https://arc.dev/en-fi",
  "https://arc.dev/en-fr",
  "https://arc.dev/en-gb",
  "https://arc.dev/en-id",
  "https://arc.dev/en-il",
  "https://arc.dev/en-in",
  "https://arc.dev/en-it",
  "https://arc.dev/en-jp",
  "https://arc.dev/en-kr",
  "https://arc.dev/en-ma",
  "https://arc.dev/en-mx",
  "https://arc.dev/en-my",
  "https://arc.dev/en-nl",
  "https://arc.dev/en-ph",
  "https://arc.dev/en-pl",
  "https://arc.dev/en-se",
  "https://arc.dev/en-sg",
  "https://arc.dev/en-th",
  "https://arc.dev/en-tw",
  "https://arc.dev/en-za",
  "https://arc.dev/faq",
  "https://arc.dev/freelance-developer-rates",
  "https://arc.dev/g/overseas-savings",
  "https://arc.dev/g/partnerships",
  "https://arc.dev/hire-assistants",
  "https://arc.dev/hire-assistants/amazon-virtual-assistants",
  "https://arc.dev/hire-assistants/executive-assistants",
  "https://arc.dev/hire-assistants/virtual-assistants",
  "https://arc.dev/hire-designers",
  "https://arc.dev/hire-designers/2d-designers",
  "https://arc.dev/hire-designers/3d-designers",
  "https://arc.dev/hire-designers/adobe-creative-cloud-experts",
  "https://arc.dev/hire-designers/art-directors",
  "https://arc.dev/hire-designers/axure-rp-experts",
  "https://arc.dev/hire-designers/brand-designers",
  "https://arc.dev/hire-designers/canva-designers",
  "https://arc.dev/hire-designers/chatbot-designers",
  "https://arc.dev/hire-designers/dashboard-designers",
  "https://arc.dev/hire-designers/data-visualization-designers",
  "https://arc.dev/hire-designers/e-commerce-website-designers",
  "https://arc.dev/hire-designers/figma-designers",
  "https://arc.dev/hire-designers/game-designers",
  "https://arc.dev/hire-designers/graphic-designers",
  "https://arc.dev/hire-designers/icon-designers",
  "https://arc.dev/hire-designers/invision-experts",
  "https://arc.dev/hire-designers/landing-page-designers",
  "https://arc.dev/hire-designers/mobile-app-designers",
  "https://arc.dev/hire-designers/photoshop-experts",
  "https://arc.dev/hire-designers/principle-designers",
  "https://arc.dev/hire-designers/print-designers",
  "https://arc.dev/hire-designers/product-researchers",
  "https://arc.dev/hire-designers/prototype-designers",
  "https://arc.dev/hire-designers/responsive-web-designers",
  "https://arc.dev/hire-designers/saas-designers",
  "https://arc.dev/hire-designers/shopify-designers",
  "https://arc.dev/hire-designers/sketch-experts",
  "https://arc.dev/hire-designers/social-media-designers",
  "https://arc.dev/hire-designers/squarespace-designers",
  "https://arc.dev/hire-designers/startup-designers",
  "https://arc.dev/hire-designers/tableau-designers",
  "https://arc.dev/hire-designers/ui-designers",
  "https://arc.dev/hire-designers/user-flow-designers",
  "https://arc.dev/hire-designers/ux-designers",
  "https://arc.dev/hire-designers/web-designers",
  "https://arc.dev/hire-designers/wordpress-designers",
  "https://arc.dev/hire-designers/zeplin-designers",
  "https://arc.dev/hire-developers",
  "https://arc.dev/hire-developers/ai",
  "https://arc.dev/hire-developers/amazon-rds",
  "https://arc.dev/hire-developers/android",
  "https://arc.dev/hire-developers/angular",
  "https://arc.dev/hire-developers/ar",
  "https://arc.dev/hire-developers/architect",
  "https://arc.dev/hire-developers/aws",
  "https://arc.dev/hire-developers/aws-cloudfront",
  "https://arc.dev/hire-developers/azure",
  "https://arc.dev/hire-developers/back-end",
  "https://arc.dev/hire-developers/bigcommerce",
  "https://arc.dev/hire-developers/blockchain",
  "https://arc.dev/hire-developers/c_sharp",
  "https://arc.dev/hire-developers/chatgpt",
  "https://arc.dev/hire-developers/cloud",
  "https://arc.dev/hire-developers/cms",
  "https://arc.dev/hire-developers/data-analytics",
  "https://arc.dev/hire-developers/data-engineering",
  "https://arc.dev/hire-developers/data-science",
  "https://arc.dev/hire-developers/database",
  "https://arc.dev/hire-developers/devops",
  "https://arc.dev/hire-developers/django",
  "https://arc.dev/hire-developers/dot_net",
  "https://arc.dev/hire-developers/drupal",
  "https://arc.dev/hire-developers/e-commerce",
  "https://arc.dev/hire-developers/elasticsearch",
  "https://arc.dev/hire-developers/engineering-managers",
  "https://arc.dev/hire-developers/fintech",
  "https://arc.dev/hire-developers/flutter",
  "https://arc.dev/hire-developers/fractional-ctos",
  "https://arc.dev/hire-developers/front-end",
  "https://arc.dev/hire-developers/full-stack",
  "https://arc.dev/hire-developers/game",
  "https://arc.dev/hire-developers/golang",
  "https://arc.dev/hire-developers/google-bigquery",
  "https://arc.dev/hire-developers/google-cloud-platform",
  "https://arc.dev/hire-developers/heroku",
  "https://arc.dev/hire-developers/html_css",
  "https://arc.dev/hire-developers/hubspot",
  "https://arc.dev/hire-developers/information-technology",
  "https://arc.dev/hire-developers/ionic",
  "https://arc.dev/hire-developers/ios",
  "https://arc.dev/hire-developers/java",
  "https://arc.dev/hire-developers/javascript",
  "https://arc.dev/hire-developers/kotlin",
  "https://arc.dev/hire-developers/laravel",
  "https://arc.dev/hire-developers/llm",
  "https://arc.dev/hire-developers/machine-learning",
  "https://arc.dev/hire-developers/magento",
  "https://arc.dev/hire-developers/matlab",
  "https://arc.dev/hire-developers/microsoft-sql-server",
  "https://arc.dev/hire-developers/mobile-app-development",
  "https://arc.dev/hire-developers/mongodb",
  "https://arc.dev/hire-developers/mysql",
  "https://arc.dev/hire-developers/network",
  "https://arc.dev/hire-developers/nlp",
  "https://arc.dev/hire-developers/nodejs",
  "https://arc.dev/hire-developers/openai",
  "https://arc.dev/hire-developers/oracle",
  "https://arc.dev/hire-developers/perl",
  "https://arc.dev/hire-developers/phonegap",
  "https://arc.dev/hire-developers/php",
  "https://arc.dev/hire-developers/postgresql",
  "https://arc.dev/hire-developers/power-bi",
  "https://arc.dev/hire-developers/python",
  "https://arc.dev/hire-developers/qa",
  "https://arc.dev/hire-developers/r",
  "https://arc.dev/hire-developers/react-native",
  "https://arc.dev/hire-developers/reactjs",
  "https://arc.dev/hire-developers/redis",
  "https://arc.dev/hire-developers/restful-api",
  "https://arc.dev/hire-developers/ruby",
  "https://arc.dev/hire-developers/ruby-on-rails",
  "https://arc.dev/hire-developers/rust",
  "https://arc.dev/hire-developers/salesforce",
  "https://arc.dev/hire-developers/scala",
  "https://arc.dev/hire-developers/security-software",
  "https://arc.dev/hire-developers/shopify",
  "https://arc.dev/hire-developers/software-development",
  "https://arc.dev/hire-developers/sql",
  "https://arc.dev/hire-developers/sqlite",
  "https://arc.dev/hire-developers/squarespace",
  "https://arc.dev/hire-developers/swift",
  "https://arc.dev/hire-developers/tableau",
  "https://arc.dev/hire-developers/tech-leads",
  "https://arc.dev/hire-developers/typescript",
  "https://arc.dev/hire-developers/unity",
  "https://arc.dev/hire-developers/unreal-engine",
  "https://arc.dev/hire-developers/visual-basic",
  "https://arc.dev/hire-developers/vr",
  "https://arc.dev/hire-developers/vue",
  "https://arc.dev/hire-developers/web-development",
  "https://arc.dev/hire-developers/wix",
  "https://arc.dev/hire-developers/woocommerce",
  "https://arc.dev/hire-developers/wordpress",
  "https://arc.dev/hire-developers/xamarin",
  "https://arc.dev/hire-marketers",
  "https://arc.dev/hire-marketers/affiliate-marketers",
  "https://arc.dev/hire-marketers/amazon-marketing-experts",
  "https://arc.dev/hire-marketers/b2b-marketers",
  "https://arc.dev/hire-marketers/brand-strategists",
  "https://arc.dev/hire-marketers/campaign-managers",
  "https://arc.dev/hire-marketers/content-marketers",
  "https://arc.dev/hire-marketers/content-writers",
  "https://arc.dev/hire-marketers/copywriters",
  "https://arc.dev/hire-marketers/digital-media-specialists",
  "https://arc.dev/hire-marketers/facebook-ads-specialists",
  "https://arc.dev/hire-marketers/fractional-cmos",
  "https://arc.dev/hire-marketers/google-ads-specialists",
  "https://arc.dev/hire-marketers/growth-marketers",
  "https://arc.dev/hire-marketers/lead-generation-experts",
  "https://arc.dev/hire-marketers/link-builders",
  "https://arc.dev/hire-marketers/marketing-consultants",
  "https://arc.dev/hire-marketers/marketing-managers",
  "https://arc.dev/hire-marketers/marketing-strategists",
  "https://arc.dev/hire-marketers/ppc-specialists",
  "https://arc.dev/hire-marketers/seo-consultants",
  "https://arc.dev/hire-marketers/seo-experts",
  "https://arc.dev/hire-marketers/seo-specialists",
  "https://arc.dev/hire-marketers/social-media-marketers",
  "https://arc.dev/hire-marketers/wordpress-seo-experts",
  "https://arc.dev/hire-marketers/youtube-marketers",
  "https://arc.dev/hire-product-managers",
  "https://arc.dev/hire-product-managers/ai-product-managers",
  "https://arc.dev/hire-product-managers/blockchain-product-managers",
  "https://arc.dev/hire-product-managers/cloud-product-managers",
  "https://arc.dev/hire-product-managers/data-product-managers",
  "https://arc.dev/hire-product-managers/directors-of-product",
  "https://arc.dev/hire-product-managers/ecommerce-product-managers",
  "https://arc.dev/hire-product-managers/iot-product-managers",
  "https://arc.dev/hire-product-managers/kanban-product-owners",
  "https://arc.dev/hire-product-managers/lean-product-managers",
  "https://arc.dev/hire-product-managers/product-coaches",
  "https://arc.dev/hire-product-managers/product-owners",
  "https://arc.dev/hire-product-managers/product-strategy-consultants",
  "https://arc.dev/hire-project-managers",
  "https://arc.dev/hire-project-managers/agile-coaches",
  "https://arc.dev/hire-project-managers/agile-project-managers",
  "https://arc.dev/hire-project-managers/agile-team-leads",
  "https://arc.dev/hire-project-managers/aws-project-managers",
  "https://arc.dev/hire-project-managers/digital-delivery-managers",
  "https://arc.dev/hire-project-managers/digital-project-managers",
  "https://arc.dev/hire-project-managers/digital-transformation-project-managers",
  "https://arc.dev/hire-project-managers/enterprise-project-management-consultants",
  "https://arc.dev/hire-project-managers/jira-experts",
  "https://arc.dev/hire-project-managers/kanban-project-planners",
  "https://arc.dev/hire-project-managers/lean-project-managers",
  "https://arc.dev/hire-project-managers/program-managers",
  "https://arc.dev/hire-project-managers/scrum-coaches",
  "https://arc.dev/hire-project-managers/scrum-project-managers",
  "https://arc.dev/hire-project-managers/startup-project-managers",
  "https://arc.dev/hire-project-managers/waterfall-project-managers",
  "https://arc.dev/how-arc-works",
  "https://arc.dev/interview",
  "https://arc.dev/job-descriptions",
  "https://arc.dev/pricing",
  "https://arc.dev/privacy",
  "https://arc.dev/remote-jobs",
  "https://arc.dev/resume",
  "https://arc.dev/salaries",
  "https://arc.dev/talent",
  "https://arc.dev/talent-blog",
  "https://arc.dev/terms",
  "https://arc.dev/w/arc-newsletter",
  "https://arc.dev/w/remote-team-bonding-playbooks",
  "https://arc.dev/w/remote-work-faqs"
];

const BASE_DIR = path.join(__dirname, 'arc-assets');
const downloadedAssets = new Map(); // url -> filepath mapping
const failedDownloads = [];

// Tạo folder structure cho mỗi page
function getPageFolder(url) {
  const urlObj = new URL(url);
  let pathname = urlObj.pathname;
  
  if (pathname === '/') {
    pathname = '/index';
  }
  
  // Remove trailing slash
  pathname = pathname.replace(/\/$/, '');
  
  // Tạo folder structure: arc-assets/path/to/page/
  const folderPath = path.join(BASE_DIR, pathname);
  fs.mkdirSync(folderPath, { recursive: true });
  return folderPath;
}

// Download file
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    // Check if already downloaded
    if (downloadedAssets.has(url)) {
      const existingPath = downloadedAssets.get(url);
      // Create symlink or copy
      try {
        if (!fs.existsSync(filePath)) {
          fs.copyFileSync(existingPath, filePath);
        }
        resolve();
        return;
      } catch (e) {
        // Continue to download if copy fails
      }
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
        fs.unlinkSync(filePath);
        downloadFile(response.headers.location, filePath).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
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
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      reject(err);
    });
    
    request.setTimeout(30000, () => {
      request.destroy();
      file.close();
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      reject(new Error('Timeout'));
    });
  });
}

// Extract filename from URL
function getFileName(url, defaultName = 'file') {
  try {
    const urlObj = new URL(url);
    let fileName = path.basename(urlObj.pathname);
    
    // Remove query params from filename but keep extension
    fileName = fileName.split('?')[0];
    
    // If no extension, try to determine from content-type or use default
    if (!path.extname(fileName)) {
      const ext = url.match(/\.(jpg|jpeg|png|gif|webp|svg|mp4|webm|mov|avi)(\?|$)/i);
      if (ext) {
        fileName = defaultName + ext[1];
      } else {
        fileName = defaultName + '.jpg'; // default
      }
    }
    
    // Sanitize filename
    fileName = fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
    
    return fileName;
  } catch (e) {
    return defaultName + '.jpg';
  }
}

// Save assets list to JSON (will be populated by Chrome DevTools script)
async function saveAssetsList(pageUrl, assets) {
  const pageFolder = getPageFolder(pageUrl);
  
  // Create images and videos folders
  const imagesFolder = path.join(pageFolder, 'images');
  const videosFolder = path.join(pageFolder, 'videos');
  fs.mkdirSync(imagesFolder, { recursive: true });
  fs.mkdirSync(videosFolder, { recursive: true });
  
  // Download images
  const imageResults = [];
  for (const imgUrl of assets.images) {
    try {
      const fileName = getFileName(imgUrl, 'image');
      const filePath = path.join(imagesFolder, fileName);
      
      await downloadFile(imgUrl, filePath);
      imageResults.push({ url: imgUrl, file: fileName, success: true });
      await new Promise(resolve => setTimeout(resolve, 200)); // Rate limiting
    } catch (err) {
      console.error(`  ❌ Failed image: ${imgUrl.substring(0, 80)}...`);
      imageResults.push({ url: imgUrl, error: err.message, success: false });
      failedDownloads.push({ url: imgUrl, type: 'image', error: err.message });
    }
  }
  
  // Download videos
  const videoResults = [];
  for (const videoUrl of assets.videos) {
    try {
      const fileName = getFileName(videoUrl, 'video');
      const filePath = path.join(videosFolder, fileName);
      
      await downloadFile(videoUrl, filePath);
      videoResults.push({ url: videoUrl, file: fileName, success: true });
      await new Promise(resolve => setTimeout(resolve, 500)); // Longer delay for videos
    } catch (err) {
      console.error(`  ❌ Failed video: ${videoUrl.substring(0, 80)}...`);
      videoResults.push({ url: videoUrl, error: err.message, success: false });
      failedDownloads.push({ url: videoUrl, type: 'video', error: err.message });
    }
  }
  
  // Save metadata
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

// Export functions for use with Chrome DevTools
module.exports = {
  allPages,
  BASE_DIR,
  getPageFolder,
  saveAssetsList,
  downloadFile,
  getFileName,
  downloadedAssets,
  failedDownloads
};

// If run directly, this script expects assets data from Chrome DevTools
if (require.main === module) {
  console.log('This script should be used with Chrome DevTools MCP to extract assets.');
  console.log('Use the Chrome DevTools to crawl pages and extract assets, then call saveAssetsList()');
}

