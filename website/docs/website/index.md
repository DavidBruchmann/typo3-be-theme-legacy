---
title: This Website
slug: /website
---

# 🌐 Static Website {#static-website}

The content of this website is primarily rendered based on markdown-files.
Markdown files include [`Front-Matter`](#front-matter) as structural component.
Special pages like the Home-page are rendered based on React.js.

The rendering process is done with [Docusarus](https://docusaurus.io/docs/markdown-features),
a special framework exactly for this purpose.

Once deployed, this website doesn't include interactive elements which require
communication with the server. There is no database and files on the server don't
change based on user-interaction. Those websites are called `static`.

---

## 🎓 Philosophy {#philosophy}

Basic idea of this website is to provide an easy maintainable solution for an own website
on github.io inside any kind of repository, including other TYPO3 extensions. Beyond the typical
Documentation which is usually rendered on the TYPO3 servers, this solution might be used to
display more or different things, including working examples of features that don't need a
database or server-side processing.

The implemented technical structure is intended to be copied and used in other repositories too.

---

## Adding, editing or moving content

### ✒️ Editing content {#editing-content}

Changing the content of existing markdown files is easy as long as
the [markdown syntax](https://www.markdownguide.org/basic-syntax/) is respected.
Docusaurus maintains an own [markdown documentation](https://docusaurus.io/docs/markdown-features)
as there are options included which go beyond common markdown.

After having changed the content [the docusaurus build process](/website#docusaurus-build-process)
has to be executed.

---

### ➕ Adding content {#adding-content}

Content can be added in the form of additional markdown files which are enriched with
the front-matter structure.

Beside the document-internal `id` or `slug` the hierarchical location in the directory
tree is important.

Furthermore content can be added directly or indirectly in JavaScript files which are
used or involved in the rendering process.

---

### ❌ Removing content {#removing-content}

When content files are removed, usually it doesn't harm the rendering process as long
as these files aren't manually linked in other files.

If removed files are linked though in JavaScript files or markdown-documents the rendering
process might fail with according error message.

### ↪️ Moving content files {#moving-content-files}

When content files are moved in the directory hierarchy, the front-matter (see next chapter)
has to be adjusted to reflect the new location and the according newly generated URL, else
the rendering process might fail with according error message.`

---

## 🔖 Front-Matter {#front-matter}

Front Matter is the "brain" of Markdown files. It is a block of YAML placed at the very
top of your document, enclosed by triple dashes (---). It allows you to define specific
metadata that Docusaurus uses to build your site’s structure and SEO.

Key Fields to Use:

 * id: A unique identifier (slug) for the document.
 * title: The main heading displayed in the browser tab and search results.
 * description: A short summary for SEO and social media previews.
 * sidebar_label: The text shown in the navigation sidebar (useful if the title is too long).
 * tags: Helps categorize content for easier discovery.

Example:

```yaml

---
id: welcome-guide
title: Introduction to My Project
sidebar_label: Welcome
tags: [tutorial, beginner]
---
```
Using Front Matter ensures your documentation remains organized and searchable.

For a deep dive into every available field, check the official
Docusaurus [Front Matter Documentation](https://docusaurus.io/docs/markdown-features#front-matter).


## 🧰 Docusaurus Build Process {#docusaurus-build-process}

The Docusaurus build process is powered by [Node.js](https://nodejs.org/) and
[npm](https://www.npmjs.com/). As a static site generator, any changes to your
content or configuration require the build process to run so that updated HTML
pages are generated.

### 🛠 Core Commands {#core-commands}

These commands are defined in your project's
[package.json](https://docs.npmjs.com/creating-a-package-json-file) file under
the scripts section. You can run them directly from your terminal:

```bash
# List available commands
npm run

# Start a local development server with live reload
npm start

# Build the production-ready static site into the /build folder
npm run build

# Preview the production build locally before deploying
npm run serve

# Build and preview a specific language (e.g., German)
npm run start -- --locale de
```

### ⚙️ Workflow & Deployment

* Local Control: Use `npm start` for real-time editing. Note that the locally
  generated build/ folder should not be committed to your repository; it is
  for local verification only.
* Automated Deployment: The final rendering for github.io is handled by
  a GitHub Actions workflow. This automation ensures your live site stays
  in sync with your main branch.

For a deep dive into customizing these scripts or setting up advanced CI/CD
pipelines, refer to the Docusaurus CLI Documentation and the Deployment Guide.

**Tip:** If you need to add a custom command (like a specific cleanup script), you
can add it to the scripts object in your package.json file.

### Structure of the directories and files in `website`

Docusaurus projects have a similar basic structure to avoid having to configure everything.
So basically **it's configuration by convention**, like shown below:

```text
website
├── blog
├── build
├── docs
├── i18n
├── node_modules
├── scripts
├── src
├── static
├── .gitignore
├── docusaurus.config.js
├── package.json
├── package-lock.json
└── sidebars.js
```
here is a short explanation:

* **blog (folder)** is optional and includes blogarticles (one markdown file per article).
  Blogarticles show the author, date and tags or categories by default which differnciates
  them from common content.
* **build (folder)** is used by docusaurus and should neither be touched nor transferred
  to the repository. The rendered website is placed including all required files there
  and overwritten on each rendering process. During development this folder is used by
  as web-root the local server.
* **docs (folder)** here documents can be stored even with folder hierarchy to be rendered
  for the website. It must at least include one markdown file usually.
* **i18n (folder)** is optional and includes translations for articles of the folders
  blog and docs.
* **node_modules** includes all installed libraries and is configured in `package.json`.
  This folder is always only created locally and neither committed nor shared for development.
* **scripts (folder)** is optional and can include scripts for many purposes.
* **src (folder)** includes assets which might be processed during the building process.
* **static (folder)** includes assets that shall be served directly without any processing.
* **docusaurus.config.js** is the fundamental configuration file for Docusaurus, defines
  the theme, navbar, footer and optionally more.
* **package.json and package-lock.json** are needed for Docusaurus to work and can also
  include individual defined commands.
* **sidebar.js** defines and configures the sidebar for the website, usually with a menu,
  but not limited to it.

The folders `build` and `node_modules` are excluded in `.gitignore` and therefore not
pushed to the repository. These folders are created by workflow actions for the live site,
when the site is deployed.

```text
website
├── blog
│   ├── 2024-05-22-welcome.md
│   ├── authors.yml
│   └── _category_.json
├── build
│   └── [HTML site built by Docusaurus]
├── docs
│   ├── repository
│   │   ├── administration
│   │   │   ├── index.md
│   │   │   ├── push-strategies.md
│   │   │   ├── ReleaseChecklist.md
│   │   │   └── squash-merging.md
│   │   ├── _category_.json
│   │   ├── Changelog.md
│   │   └── index.md
│   ├── theme
│   │   ├── _category_.json
│   │   ├── index.md
│   │   └── module-icon-identifiers.md
│   └── website
│       ├── _category_.json
│       └── index.md
├── docusaurus.config.js
├── i18n
│   └── de
│       ├── code.json
│       ├── docusaurus-plugin-content-blog
│       │   ├── 2024-05-22-welcome.md
│       │   ├── authors.yml
│       │   └── options.json
│       ├── docusaurus-plugin-content-docs
│       │   ├── current
│       │   │   ├── repository
│       │   │   │   ├── Changelog.md
│       │   │   │   └── index.md
│       │   │   ├── theme
│       │   │   │   └── index.md
│       │   │   └── website
│       │   │       └── index.md
│       │   └── current.json
│       └── docusaurus-theme-classic
│           └── navbar.json
├── package.json
├── package-lock.json
├── scripts
├── sidebars.js
├── src
│   ├── components
│   │   ├── HomepageCards
│   │   │   ├── index.js
│   │   │   └── styles.module.css
│   │   └── ...
│   ├── css
│   ├── img
│   └── pages
│       ├── index.js
│       └── index.module.css
└── static
    ├── icons
    └── img

```


## @TODO {#@todo}

### @TODO design {#@todo-design}
* ~~Add JS for smooth scrolling and link-to-top~~
* ~~Add~~ Replace icons in headlines.
* ~~Add large badge in [Support](/website#support)~~
* ~~Replace link-color in dark mode~~
* Add easy available links to
  * ~~the repository~~
  * packagist.org
  * TER

### @TODO content {#@todo-content}

* ~~Explain special files like package.json, docusaurus.config.yml, etc..~~
* ~~Explain structure for the website and important files and aspects.~~
* ~~Show examples for commands and provide a walkthrough perhaps.~~
* P~~rovide code examples for front-matter and JavaScript~~
* ~~Link to Docusaurus documentation.~~
* Explain workflows and the deploy-action.
* Mention further repositories, especially llm-chat-publisher with advanced tools for
  content handling.
* consider splitting this page if it's getting too long.

### @TODO Scripting {#@todo-scripting}

* Add icon for external links automatically
* ~~Preceding icons in headlines hamper section links, try to avoid the leading "-" then.~~

---

## 🙏 ♥️ Support {#support}

If this project saves you time or helps your work,
you can support its continued development.

On Ko-fi I've also a small blog, which might be interesting for you to read.

[![Support on Ko-fi](/img/kofi-badge-medium.png)](https://https://ko-fi.com/davidbruchmann)

---
