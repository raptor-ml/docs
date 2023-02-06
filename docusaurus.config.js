// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const fauxRemarkEmbedder = require('@remark-embedder/core')
const fauxOembedTransformer = require('@remark-embedder/transformer-oembed')
const remarkEmbedder = fauxRemarkEmbedder.default
const oembedTransformer = fauxOembedTransformer.default

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Raptor',
  tagline: 'Transform your data science to production-ready models\n',
  url: 'https://raptor.ml',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.svg',
  organizationName: 'raptor-ml', // Usually your GitHub org/user name.
  projectName: 'raptor', // Usually your repo name.
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          remarkPlugins: [[remarkEmbedder, { transformers: [oembedTransformer] }]],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/raptor-ml/docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/raptor-ml/docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'Raptor',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guides',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'reference/how-does-raptor-work/readme',
            position: 'left',
            label: 'Reference',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/raptor-ml/raptor',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Raptor',
          src: 'img/logo.svg',
          height: 80,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Raptor.`,
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Getting started',
                to: '/docs/guides/getting-started-with-labsdk-ipynb',
              },
            ],
          },
          {
            title: 'Reference',
            items: [
              {
                label: 'Reference',
                to: '/docs/reference/how-does-raptor-work',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: 'Twitter',
                href: 'https://twitter.com/RaptorML',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/raptor-ml/raptor',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'MPWPX5FK2F',

        // Public API key: it is safe to commit it
        apiKey: '4e405e6850a7ce6ee89845e365b282d9',

        indexName: 'raptor',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push.
        // Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: undefined,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      }
    }),
}

module.exports = config
