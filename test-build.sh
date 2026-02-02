#!/bin/bash
# 1. Load Environment
if [ -f website/.env ]; then
  export $(grep -v '^#' website/.env | grep -v '^$' | xargs)
fi

REPO_NAME=${GITHUB_REPO}
VERSION=$(grep '"version"' website/package.json | cut -d '"' -f 4)
ARCHIVE_NAME="${REPO_NAME}-documentation-v${VERSION}"
OFFLINE_DIR="temp_offline_build"

echo "🚀 Building Online Site..."
cd website && SKIP_HTML_MINIFICATION=true npm run build:raw && cd ..

echo "📂 Creating Offline Copy for Scrubbing..."
rm -rf "$OFFLINE_DIR"
cp -r website/build "$OFFLINE_DIR"

echo "🚿 Scrubbing Offline Copy..."
# Run your fixer script pointing to the NEW temp folder
# (Update your script to accept a target directory argument if possible)
node website/scripts/fix-relative-paths.js "$OFFLINE_DIR"

echo "🗜  Packaging Archive (Root-Level Content)..."
rm -f "${ARCHIVE_NAME}.zip"

# Create a folder with the final name temporarily to get the ZIP structure right
mkdir -p "$ARCHIVE_NAME"
cp -r "$OFFLINE_DIR"/* "$ARCHIVE_NAME"/

# ZIP the folder itself so the structure is: ArchiveName/index.html
zip -r9 "${ARCHIVE_NAME}.zip" "$ARCHIVE_NAME"

# Cleanup
rm -rf "$OFFLINE_DIR"
rm -rf "$ARCHIVE_NAME"

echo "✅ SUCCESS: ${ARCHIVE_NAME}.zip created without touching 'website/build'."
