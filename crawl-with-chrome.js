// Script này sẽ được chạy từ Chrome DevTools MCP
// Sử dụng Chrome DevTools để crawl pages với scroll để load lazy assets

const { allPages, saveAssetsList } = require('./download-assets-with-scroll');

// Function để extract assets từ page sau khi scroll
async function extractAssetsFromPage(pageUrl) {
  console.log(`\n📄 Processing: ${pageUrl}`);
  
  // Navigate to page
  await navigatePage(pageUrl);
  
  // Wait for initial load
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Scroll to load lazy assets
  await scrollPage();
  
  // Wait for lazy loaded content
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Extract all images and videos
  const assets = await extractAllAssets();
  
  // Save assets to folder
  const metadata = await saveAssetsList(pageUrl, assets);
  
  console.log(`  ✅ Found: ${assets.images.length} images, ${assets.videos.length} videos`);
  console.log(`  ✅ Downloaded: ${metadata.images.successful} images, ${metadata.videos.successful} videos`);
  
  return assets;
}

// Scroll page function (to be called via Chrome DevTools)
async function scrollPage() {
  // Scroll gradually to trigger lazy loading
  const scrollSteps = 5;
  const scrollDelay = 500;
  
  for (let i = 0; i < scrollSteps; i++) {
    // Scroll to position
    await evaluateScript(`
      window.scrollTo({
        top: (document.body.scrollHeight / ${scrollSteps}) * ${i + 1},
        behavior: 'smooth'
      });
    `);
    
    await new Promise(resolve => setTimeout(resolve, scrollDelay));
  }
  
  // Scroll back to top
  await evaluateScript('window.scrollTo({ top: 0, behavior: "smooth" });');
  await new Promise(resolve => setTimeout(resolve, 1000));
}

// Extract all assets from page
async function extractAllAssets() {
  const result = await evaluateScript(`
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
      
      // Get background images from computed styles
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
      
      // Get images from Next.js Image components (check for data attributes)
      document.querySelectorAll('[data-src], [data-lazy-src]').forEach(el => {
        const src = el.getAttribute('data-src') || el.getAttribute('data-lazy-src');
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
  `);
  
  return result;
}

// Main crawl function
async function crawlAllPages() {
  console.log(`🚀 Starting to crawl ${allPages.length} pages with lazy loading support...\n`);
  
  const results = [];
  
  for (let i = 0; i < allPages.length; i++) {
    try {
      const pageUrl = allPages[i];
      const assets = await extractAssetsFromPage(pageUrl);
      results.push({ url: pageUrl, success: true, assets });
      
      // Delay between pages
      if (i < allPages.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (err) {
      console.error(`❌ Error processing ${allPages[i]}:`, err.message);
      results.push({ url: allPages[i], success: false, error: err.message });
    }
  }
  
  console.log(`\n\n✅ Crawl complete!`);
  console.log(`📊 Total pages: ${allPages.length}`);
  console.log(`✅ Successful: ${results.filter(r => r.success).length}`);
  console.log(`❌ Failed: ${results.filter(r => !r.success).length}`);
  
  return results;
}

// Export for use
module.exports = {
  extractAssetsFromPage,
  scrollPage,
  extractAllAssets,
  crawlAllPages
};

