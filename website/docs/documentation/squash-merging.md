---
 title: Squash Merging
slug: /squash-merging
---

# Manual Bash Merging (Squash Emulation)

Merging in Bash, the "Squash" behavior (which keeps the Changelog clean) can
be emulated by using the --squash flag. This turns a long history of "wip"
commits into one single entry for your update-changelog.sh to pick up.

If the branch main requires a PR as safety setting:

```
# 1. Creating a work branch
git checkout -b feature/my-update

# 2. Work and push to the feature branch
# This triggers the Docusaurus "Sandbox" build to check for errors
git add .
git commit -m "feat: updated backend icons"
git push origin feature/my-update

# 3. Create the PR
# This is done on GitHub.com. It will show "Checks passed" if the Action is green.

# 4. Merge the PR
# Use "Squash and Merge" on GitHub. This triggers the 'main' workflow:
# It updates the live site and prepends the one-liner to the Changelog.
```

else it can be directly pushed to the main branch:

```
# 1. Work on feature
git checkout -b feature/new-styles

# ... commit multiple times ...
git push origin feature/new-styles

# 2. Merge to main (The "Clean" Way)
git checkout main

git merge --squash feature/new-styles
git commit -m "feat: implement modernized backend styles" # One clean message

git push origin main
```
---
