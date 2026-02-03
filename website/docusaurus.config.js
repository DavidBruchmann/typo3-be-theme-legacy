import { themes as prismThemes } from 'prism-react-renderer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';

export default {
  title: 'Backend Theme Legacy',
  tagline: 'Modern TYPO3 v14 Backend Customization',
  url: 'https://davidbruchmann.github.io',
  baseUrl: '/typo3-be-theme-legacy/',
  organizationName: 'DavidBruchmann',
  projectName: 'be-theme-legacy',
  favicon: '../Resources/Public/Icons/favicon.ico',

  trailingSlash: false,
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          exclude: ['/index'], // 👈 exclude landing page
        },
        theme: {
          customCss: path.resolve(__dirname, '.Build/assets/scss/custom.scss'),
        }
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'BE Theme Legacy',
      logo: {
        alt: 'BE Theme Legacy',
        src: 'Resources/Public/Icons/Extension.svg', // Uses your extension icon
      },
      items: [
        {
          to: '/',
          label: 'Blog',
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'module-icon-identifiers',
          label: 'Docs',
          position: 'left'
        },
        /*
        {
          type: 'doc',
          to: '/Changelog',
          docId: 'changelog',
          label: 'Changelog',
          position: 'left'
        },
        */
        {
          href: 'https://ko-fi.com/davidbruchmann',
          // label: 'Support me on Ko-Fi',
          position: 'right',
          className: 'navbar__item--kofi',
          'aria-label': 'Support this project on Ko-fi',
        }
      ],
    },
    // announcementBar: {
      // id: support_us,
      // content: "Support us"
    // },
    /*
    navbar: {
      // title: 'Q&A',
      logo: {
        alt: 'Q&A Knowledge Base',
        src: 'img/logo.svg',
        href: '/', // optional, but fine
      },
      items: [
        / *
        { to: 'qa', label: 'Q&A', position: 'left' },
        { to: '/docs/topics', label: 'Topics', position: 'left' },
        { to: '/docs/documentation', label: 'Documentation', position: 'left' },
        * /

        {
          to: '/',
          // label: 'Home',
          position: 'left',
          title: 'Home',
          className: 'navbar__item--home',
          'aria-label': 'Home',
        },
        {
          to: '/qa/',
          label: 'Q&A',
          title: 'Question and Answer',
          position: 'left'
        },
        {
          to: '/topics/',
          label: 'Topics',
          position: 'left'
        },
        {
          to: '/documentation',
          label: 'Documentation',
          position: 'left'
        }

      ],
    },
    */
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  }
};
