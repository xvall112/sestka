require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteTitle: `Rodinné domy Šestka`,
    siteDescription:
      'Bydlení v přírodě s vlastním pozemkem a garáží. Minimalistické, moderní a pohodlné bydlení s naprostým soukromím! S docházkovou vzdáleností do centra Příbrami.',
    /* `Na prodej šest rodinných domů s vlastním pozemkem a garáží na Sázkách pár minut do Prahy vedle Příbrami`, */
    author: `@sios`,
    siteUrl: 'https://rdsestka.cz',
    lang: 'cs',
    image: '/src/assets/images/ACCamera.jpg',
    keywords: [
      'prodej',
      'rodinny dum',
      'dum',
      'zahrada',
      'pozemek',
      'Pribram',
      'priroda',
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS, // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        googleTagManager: {
          trackingId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lespey4inikw`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-leaflet',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rd Sestka`,
        short_name: `Sestka`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f90003`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },

    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
        disableAutoprefixing: true,
        disableMinification: true,
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',

    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
  ],
};
