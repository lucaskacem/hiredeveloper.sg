#!/bin/bash
# Render the Remotion hero video for hiredeveloper.sg
# Usage: ./scripts/render-video.sh [format]
#   format: webm (default) or mp4

set -e

cd "$(dirname "$0")/.."

FORMAT="${1:-webm}"

echo "Rendering MarketingVideo as ${FORMAT}..."

if [ "$FORMAT" = "mp4" ]; then
  node node_modules/@remotion/cli/remotion-cli.js render \
    remotion/index.ts MarketingVideo \
    --concurrency=8 \
    public/videos/hero.mp4
else
  node node_modules/@remotion/cli/remotion-cli.js render \
    remotion/index.ts MarketingVideo \
    --codec vp8 \
    --concurrency=8 \
    public/videos/hero.webm
fi

echo ""
echo "Render complete!"
ls -lh "public/videos/hero.${FORMAT}"
