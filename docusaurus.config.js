// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Happy Form',
  tagline: 'Simple, Easy to use, Powerful!',
  url: 'https://react-happy-form-docs.onrender.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'React Happy Form',
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'document/quick-start',
            position: 'left',
            label: 'Document',
          },
          {
            type: 'doc',
            docId: 'api/use-form',
            position: 'left',
            label: 'API',
          },
          {
            href: 'https://github.com/react-earth/react-happy-form',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Document',
                to: '/docs/document/quick-start',
              },
              {
                label: 'API',
                to: '/docs/api/use-form',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/react-earth/react-happy-form/discussions',
              },
              {
                label: 'Issues',
                href: 'https://github.com/react-earth/react-happy-form/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/react-earth/react-happy-form',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} React Earth, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'PKRWQYXC07',
        apiKey: '71372be4e08f3d483a7fec9afd0d5850',
        indexName: 'docs',
      },
    }),
};

module.exports = config;
