# Documentation Setup & Portability Guide

This system separates your functional TYPO3 code from your Docusaurus documentation.

---

## 1. Actions / Workflows

Actions or workflows depend on the platform / git-provider.

Follow the chapter for your specific hosting platform.
Only github is tested though. Feel welcome to give feedback, so that the others
might be improved if there are some problems.

### 🐙 1.1. GitHub

GitHub uses **Actions** for deployment.

1. Copy `github/deploy.yml.dist` to `.github/workflows/deploy.yml`.
2. Rename `github/.gitattributes.dist` to `/.gitattributes`.
3. Set the `env:` block in the YAML to match your repo name and URL.

### 🦊 1.2. GitLab

GitLab uses a single **CI/CD** file.

1. Copy `gitlab/.gitlab-ci.yml.dist` to `/.gitlab-ci.yml`.
2. Ensure **GitLab Pages** is enabled in your project settings.
3. The build artifact is named `public` (Docusaurus build is moved there automatically).

### 🏔 1.3. Codeberg

Codeberg uses **Forgejo Actions** (compatible with GitHub Actions).

1. Copy `codeberg/.forgejo-actions.yml.dist` to `.forgejo/workflows/deploy.yml`.
2. **Important**: Enable "Actions" in your repository settings on Codeberg.
3. Codeberg Pages serves from a branch named `pages`. The template handles this push.

**Implementation Note for Codeberg:**

* Tokens: Unlike GitHub, Codeberg requires you to generate
  a Personal Access Token (PAT) and add it as a secret named CODEBERG_TOKEN
  in your repo settings Codeberg Actions Documentation.
* Pages Branch: Codeberg project pages are served from
  the pages branch (or main if it's a user-level site) Codeberg Pages Guide.

### 🏹 1.4. Bitbucket

Bitbucket uses **Pipelines**.

1. Copy `bitbucket/bitbucket-pipelines.yml.dist` to `/bitbucket-pipelines.yml`.
2. **Setup**: Go to *Repository Settings > Pipelines > Settings* and enable them.
3. **Hosting**: Bitbucket doesn't have a direct "Pages" equivalent as automated as GitHub. Most users deploy the beautified `build/` folder to a "Downloads" section or an external S3/Static host.

## 2. Common Portability Steps

Regardless of the platform, always update your individual **`website/.env`** file.

## 🛡 3. Local Badge Engine (Shields-Free)

This system generates its own SVG badges during the build process,
removing dependency on external services for your GitHub README.

### 3.1. How it works:

1. The script `website/scripts/generate-badge.js` runs after the Docusaurus build.
2. It pulls the version string from `website/package.json`.
3. It renders the `CustomBadge` React component into a static `build/badge.svg`.

### 3.2. Usage in README:

To display your local badge, use this Markdown snippet:

```
[![Docs Version](https://<user>.github.io/<repo>/badge.svg)](https://<user>.github.io/<repo>/)`
```

### 3.3. Customization:

To change the badge color or label, edit the variables in `website/scripts/generate-badge.js`.

---
