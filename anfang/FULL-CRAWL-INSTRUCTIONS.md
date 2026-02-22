# Hướng dẫn Crawl Tất Cả 257 Pages

## Tình trạng hiện tại

✅ **Đã hoàn thành:**
- Scripts đã được tạo và test thành công
- Trang chủ (https://arc.dev/) đã được crawl
- Trang about-us đã được crawl
- Cấu trúc folder đã được tạo đúng

## Cách chạy crawl tự động

Vì có **257 pages**, việc crawl thủ công sẽ mất rất nhiều thời gian. Tôi đã tạo các scripts để bạn có thể:

### Option 1: Chạy tự động với script (Recommended)

Tạo một script Python hoặc Node.js sử dụng Puppeteer để crawl tự động tất cả pages.

### Option 2: Chạy từng batch với Chrome DevTools MCP

Sử dụng các scripts đã tạo để crawl từng batch pages:

```bash
# Xem progress hiện tại
node crawl-all-pages.js

# Xem batch tiếp theo cần crawl
node crawl-batch.js
```

Sau đó sử dụng Chrome DevTools MCP để crawl từng page trong batch.

## Scripts đã tạo

1. **download-assets-with-scroll.js** - Core functions
2. **process-assets.js** - Process và download assets
3. **crawl-all-pages.js** - Quản lý progress
4. **crawl-batch.js** - Tạo instructions cho batch pages
5. **run-crawl.js** - Script tự động (cần setup)

## Cấu trúc folder

Assets được lưu trong:
```
arc-assets/
  ├── index/              # https://arc.dev/
  │   ├── images/
  │   ├── videos/
  │   └── metadata.json
  ├── about-us/           # https://arc.dev/about-us
  │   ├── images/
  │   ├── videos/
  │   └── metadata.json
  └── ...
```

## Progress Tracking

Progress được lưu trong `crawl-progress.json` và có thể resume bất cứ lúc nào.

## Lưu ý

- Mỗi page sẽ được scroll để load lazy assets
- Assets được lưu riêng cho mỗi page
- Có rate limiting để tránh bị block
- Có thể resume nếu bị gián đoạn

## Tổng số: 257 pages

- Main: 1 page ✅
- Hire Developers: 91 pages
- Hire Designers: 37 pages  
- Hire Marketers: 26 pages
- Hire Product Managers: 13 pages
- Hire Project Managers: 17 pages
- Hire Assistants: 4 pages
- Countries: 31 pages
- Blogs: 7 pages
- Resources: 8 pages
- Other: 14 pages

