import { themes as prismThemes } from 'prism-react-renderer';
import path from 'path';
import { fileURLToPath } from 'url';
import remarkModuleIcons from './src/plugins/remark-module-icons.js';

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
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          exclude: ['/index'], // exclude landing page
          remarkPlugins: [remarkModuleIcons],
        },
        theme: {
          customCss: path.resolve(__dirname, '.Build/assets/scss/custom.scss'),
        }
      }
    ]
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
      },
    }
  },
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Home',
        src: 'img/themeTruck-logo.png',           // for Light mode (dark version)
        srcDark: 'img/themeTruck-logo-white.png', // for Dark mode (white version)
        width: '100px',
        height: '32px'
      },
      items: [
        /*
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        */
        {
          to: '/theme',
          label: 'Theme',
          position: 'left'
        },
        {
          to: '/website',
          label: 'Website',
          position: 'left'
        },
        {
          type: 'html',
          position: 'right',
          value: `
            <a href="https://github.com/DavidBruchmann/typo3-be-theme-legacy" target="_blank" rel="noopener noreferrer" style="display: flex;">
              <span class="svg-wrapper"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="octicon octicon-mark-github" viewBox="0 0 24 24" width="32" height="32" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path></svg></span>&nbsp;GitHub
            </a>
          `,
        },
        {
          href: 'https://ko-fi.com/davidbruchmann',
          // label: 'Support me on Ko-Fi',
          position: 'right',
          className: 'navbar__item--kofi',
          'aria-label': 'Support this project on Ko-fi',
        }
      ],
    },
    footer: {
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/david-bruchmann-069b9519/',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/1019850/david',
            },
            {
              label: 'Xing',
              href: 'https://www.xing.com/profile/David_Bruchmann/',
            },
            {
              label: '♥️ Support Me ♥️',
              href: 'https://www.ko-fi.com/DavidBruchmann/',
            },
          ],
        },
        {
          title: 'Sponsoring',
          items: [
            {
              html: `
              <h2 class="anchor" id="support">
                  🙏 ♥️ Support<a href="#support" class="hash-link" aria-label="Direct link to 🙏 ♥️ Support" title="Direct link to 🙏 ♥️ Support" translate="no">​</a>
                    </h2>
                    <p style="max-width: 18rem;">If this project saves you time or helps your work, you can support its continued development.</p>
                    <p style="max-width: 18rem;">On Ko-fi I have also a small blog, which might be interesting for you to read.</p>
                    <p><a href="https://https://ko-fi.com/davidbruchmann" target="_blank" rel="noopener noreferrer" class="">
                      <img decoding="async" loading="lazy" alt="Support me on Ko-fi" src="/typo3-be-theme-legacy/img/kofi-badge-medium.png" width="160" height="87">
                      </a>
                    </p>
              `,
            }
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  }
};
