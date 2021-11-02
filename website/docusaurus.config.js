/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Bramble',
  tagline: `Integrable Cryptocurrency for Web 2.0 games`,
  url: 'https://bramble.co.in',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'BrambleCo', // Usually your GitHub org/user name.
  projectName: 'bramble-website', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    announcementBar: {
      id: 'announcementBar',
      backgroundColor: '#74e8a3',
      isCloseable: true,
      content:
        'Talk to us on our <a target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/zrxGhrwNs7">Discord</a> ⭐ !',
    },
    colorMode: {
      defaultMode: 'dark',
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '💡',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'Bramble',
      hideOnScroll: true,
      logo: {
        alt: 'bramble',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      items: [
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'For Developers',
        },
        // { to: '/initiatives', label: 'Initiatives', position: 'left' },
        {
          to: '/community/code-contribution',
          label: 'For Business',
          position: 'left',
          activeBaseRegex: '/community/',
        },
        {
          to: '/case-studies/introduction',
          label: 'Play Games',
          position: 'left',
          activeBaseRegex: '/case-studies/',
        },
        { to: '/blog', label: 'Blogs', position: 'right' },
        {
          href: 'https://discord.com/invite/zrxGhrwNs7',
          label: 'Join Discord',
          position: 'right',
        },
        // { to: '/roadmap', label: 'Roadmap', position: 'right' },
        // {
        //   to: '/tutorial/tutorial-introduction',
        //   label: 'Tutorial',
        //   position: 'left',
        //   activeBaseRegex: '/tutorial/'
        // },
      ],
    },
    footer: {
      logo: {
        alt: 'bramble light logo',
        src: '/img/logo.png',
        href: 'https://bramble.co.in/',
      },
      style: 'light',
      links: [
        {
          title: 'Our Blog',
          items: [
            {
              label: 'Website Blog',
              href: '/blog/',
            },
            {
              label: 'Medium Blog',
              href: 'https://rahul-soshte47.medium.com/how-to-setup-your-windows-pc-for-substrate-development-9fe5abb48222',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Twitter ',
              href: 'https://twitter.com/bramble_chain',
            },
            {
              label: 'Reddit ',
              href: 'https://www.reddit.com/r/bramble_chain/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/bramble_chain/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/brambleapi/?viewAsMember=true',
            },
          ],
        },
        {
          title: 'Bramble in News',
          items: [
            {
              label: 'NEAR',
              href: 'https://medium.com/nearprotocol/meet-the-15-startups-going-through-to-the-near-blockchain-accelerator-bootcamp-288d80eed0f1',
            },
            {
              label: 'Inc42',
              href: 'https://inc42.com/buzz/meet-the-winning-startups-and-finalists-of-pitch42-at-the-crypto-summit/',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'Bramble Website',
              href: 'https://github.com/BrambleCo/bramble-website',
            },
            {
              label: 'Decreasing Substrate Learning Curve',
              href: 'https://github.com/BrambleCo/decreasing-substrate-learning-curve'
            },
            {
              label: 'Bramble Node',
              href: 'https://github.com/BrambleCo/bramble',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} bramble.`,
    },
    image: 'https://bramble.co.in/img/logo.png',
    metadatas: [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://community.moja.global/img/logo.png',
      },
      { name: 'twitter:title', content: 'Moja Global Community' },
      {
        name: 'twitter:description',
        content: "Learn about moja global's projects and join our ever-growing community",
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        googleAnalytics: {
          trackingID: 'UA-195907568-1',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "All Posts",
          editUrl: 'https://github.com/BrambleCo/bramble-website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'case-studies',
        path: 'case-studies',
        routeBasePath: 'case-studies',
        sidebarPath: require.resolve('./sidebarsCaseStudies.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
          id: 'tutorial-introduction',
          path: 'tutorial',
          routeBasePath: 'tutorial',
          sidebarPath: require.resolve('./sidebarsTutorial.js')
      },
    ],
  ],
};
