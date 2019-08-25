module.exports = {
  pathPrefix: `/gatsby-cn`,
  siteMetadata: {
    title: `Cinemanord`,
    description: `Cinemanord is an awesome company!`,
    author: `@weibenfalk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cinemanord-webpage`,
        short_name: `cinemanord`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/cn-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        excludedRoutes: [
          '/wp/v2/users/**',
          '/wp/v2/settings*',
          '/wp/v2/themes*',
        ],
        baseUrl: 'dev.cinemanord.com',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: 'https://dev.cinemanord.com/',
        //   replacementUrl: '',
        // },
        // plugins: [
        //   {
        //     resolve: `gatsby-wordpress-inline-images`,
        //     options: {
        //       baseUrl: `https://dev.cinemanord.com/`,
        //       protocol: `https`,
        //     },
        //   },
        // ],
      },
    },
    'gatsby-plugin-styled-components',
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: 'Quicksand',
    //         variants: ['200', '400', '500', '600', '700'],
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`400`, `700`],
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-57605980-1',
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-57605980-1', // Google Analytics / GA
          'AW-957797553', // Google Ads / Adwords / AW
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: 'OPT_CONTAINER_ID',
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
