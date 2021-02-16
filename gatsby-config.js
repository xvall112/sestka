require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteTitle: `Rodinné domy Šestka`,
    siteDescription: `Na prodej šest rodinných domů s vlastním pozemkem a garáží na Sázkách pár minut do Prahy vedle Příbrami`,
    author: `@sios`,
    siteUrl: 'https://pensive-raman-03684b.netlify.app/',
    lang: 'cs',
    image: '/src/assets/images/logo.png',
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
