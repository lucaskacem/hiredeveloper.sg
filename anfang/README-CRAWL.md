# Arc.dev Assets Crawler

Script để crawl và download tất cả assets (images/videos) từ 257 pages của arc.dev.

## Cấu trúc Folder

Assets sẽ được lưu theo cấu trúc:
```
arc-assets/
  ├── index/              # Trang chủ (https://arc.dev/)
  │   ├── images/
  │   ├── videos/
  │   └── metadata.json
  ├── hire-developers/
  │   ├── images/
  │   ├── videos/
  │   └── metadata.json
  ├── hire-developers/ai/
  │   ├── images/
  │   ├── videos/
  │   └── metadata.json
  └── ...
```

## Cách sử dụng

### Option 1: Sử dụng Chrome DevTools MCP (Recommended)

1. Mở Chrome DevTools MCP
2. Chạy script `auto-crawl.js` để xem hướng dẫn
3. Sử dụng các function sau cho mỗi page:

```javascript
// 1. Navigate to page
navigate_page(url)

// 2. Wait for load
setTimeout(2000)

// 3. Scroll to load lazy assets
evaluate_script(scrollScript)

// 4. Extract assets
const assets = evaluate_script(extractAssetsScript)

// 5. Process và download
processPageAssets(pageUrl, assets)
```

### Option 2: Chạy tự động (cần setup)

Script sẽ tự động:
- Navigate đến từng page
- Scroll để load lazy assets
- Extract tất cả images và videos
- Download về local theo folder structure

## Files

- `download-assets-with-scroll.js` - Core functions để download assets
- `crawl-assets.js` - Functions để extract assets từ HTML
- `process-assets.js` - Process và download assets cho mỗi page
- `crawl-all-pages.js` - Quản lý progress và crawl tất cả pages
- `auto-crawl.js` - Script tự động với hướng dẫn

## Progress Tracking

Progress được lưu trong `crawl-progress.json` và có thể resume bất cứ lúc nào.

## Lưu ý

- Một số pages có lazy loading, script sẽ scroll để load tất cả assets
- Assets được lưu riêng cho mỗi page trong folder tương ứng
- Metadata của mỗi page được lưu trong `metadata.json`
- Script có rate limiting để tránh bị block

## Tổng số pages: 257

- Main pages: 1
- Hire Developers: 91 pages
- Hire Designers: 37 pages
- Hire Marketers: 26 pages
- Hire Product Managers: 13 pages
- Hire Project Managers: 17 pages
- Hire Assistants: 4 pages
- Country pages: 31 pages
- Blog pages: 7 pages
- Resource pages: 8 pages
- Other pages: 14 pages

