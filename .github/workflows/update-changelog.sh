#!/bin/bash
CHANGELOG_FILE="Documentation/Changelog.md"
REPO_URL="https://github.com/DavidBruchmann/be-theme-legacy/"

# 1. Define the range (Old state .. New state)
# In GitHub Actions, these are available via environment variables
RANGE="${BEFORE_SHA}..${AFTER_SHA}"

# 2. Generate all new entries in reverse order
# --no-merges: skips messy merge commits
# --reverse: puts them in chronological order if you're prepending
NEW_ENTRIES=$(git log "$RANGE" --no-merges --pretty=format:"* %ad | [\`%h\`]($REPO_URL/commit/%h) | %s" --date=short)

# 3. Prepend to the file
if [ -n "$NEW_ENTRIES" ]; then
    # Use a temporary file to handle multi-line prepending safely
    echo -e "$NEW_ENTRIES" > temp_entries.txt
    sed -i "7r temp_entries.txt" "$CHANGELOG_FILE"
    rm temp_entries.txt
    echo "✅ Added new commits to $CHANGELOG_FILE"
else
    echo "ℹ️ No new commits to add."
fi
