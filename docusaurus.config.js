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
          remarkPlugins: [[remarkEmbedder, {transformers: [oembedTransformer]}]],
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/raptor-ml/docs/tree/master/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/raptor-ml/docs/tree/master/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: (
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
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
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'reference/README',
            position: 'left',
            label: 'Reference',
          },
          {
            type: 'doc',
            docId: 'docs/community',
            position: 'left',
            label: 'Community',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
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
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/',
              },
              {
                label: 'Getting started',
                to: '/docs/getting-started-ipynb',
              },
              {
                label: 'Core concepts',
                to: '/docs/concepts/',
              },
              {
                label: 'How does Raptor work?',
                to: '/docs/how-it-works/',
              },
            ],
          },
          {
            title: 'Reference',
            items: [
              {
                label: 'Reference',
                to: '/reference',
              },
              {
                label: 'LabSDK decorators',
                to: '/reference/labsdk/decorators',
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
                label: 'Slack community',
                to: '/docs/community',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/RaptorML',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
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
      },
      metadata: [
        {
          name: 'keywords',
          content: "raptor-ml, raptor, ml, machine learning, feature store, operational model, mlops, " +
            "productization, deployment, data science, data engineering, data pipeline, prediction, inference, concepts, " +
            "model serving, tabular data, time series, kubernetes, research, feature engineering, feature selection, " +
            "feature extraction, feature transformation, feature aggregation, feature generation, feature enrichment, " +
            "feature validation, devops, data ops, data science ops, data engineering ops, data science platform, " +
            "data engineering platform, feature engineering platform, online, real-time, batch, offline, scalability, " +
            "sagemaker, feast, feathr, mlflow, kubeflow, docker, backend, production, production-ready"
        },
      ],
    }),
}

module.exports = config
