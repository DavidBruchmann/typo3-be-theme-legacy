---
title: Release Checklist
slug: /release-checklist
---

# Release Checklist

To ensure your TYPO3 extension and its Docusaurus documentation are perfectly
synchronized before you push a new tag, follow this Release Checklist,
it covers the functional code, the documentation engine, and the deployment assets.

## 1. Functional Sync (TYPO3 & Composer)

   ### Version Alignment:

   Does the version number match across `ext_emconf.php`, `composer.json`,
   and `website/package.json`?

   ### Changelog:

   Have you added a new entry to `Documentation/Changelog.md` (or your chosen location)
   summarizing the changes?

   ### Dependency Check:

   If you updated PHP or TYPO3 requirements in `composer.json`,
   did you also update the "Requirements" section in your documentation?

   ### Local Build Test:

   Run composer install and ensure the extension still loads
   in a TYPO3 instance without errors.

## 2. Documentation & Beautification

   * **Local "Tidy" Check:** Run your test-build.sh script.
     Open the build/index.html and verify the HTML is indented and readable.
   * **Broken Link Audit:** Run `npx docusaurus build` locally; it will warn you
     if any internal links in your `/Documentation` folder are broken.
   * **Blog Post:** Have you written a new post in website/blog/ to announce
     this version's highlights?
   * **Asset Check:** Verify that any new TYPO3 icons added to `Resources/Public/Icons`
     are rendering correctly in the docs via the `@typo3-icons` alias.

## 3. Release & Portability Assets

   * **Offline Archive:** Ensure baseUrl: './' is set in `docusaurus.config.js`,
     so the generated ZIP remains readable without a server.

   * **Badge Verification:** Run node `website/scripts/generate-badge.js` locally
     and check if build/badge.svg shows the correct new version string.

   * **.gitattributes Audit:** Check that no new sensitive files or Docusaurus source
     files have been added that need to be added to the export-ignore list.

## 4. GitHub / Platform Readiness

   * **Workflow Dispatch:** (Optional) Run the GitHub Action manually once
     on the main branch to ensure the "Latest" site looks perfect before you
     lock it in with a tag.

   * **Tag Naming:** Confirm your tag follows the vX.Y.Z format required
     by your GitHub Action and Packagist.

## 5. Post-Tag Verification

   * **Release Assets:** After pushing the tag, visit the Releases page.
     Is the ZIP named correctly (e.g., be-theme-legacy-documentation-v1.x.zip)?

   * **Live Badge:** Check your README.md on GitHub. Does the badge
     now show the new version?

## 🛠 Functional & TYPO3
- [x] **Linting**: PHP syntax check passed for 8.2-8.5.
- [ ] **Unit Tests**: (TODO) Implement PHPUnit for Core EventListeners.

---
