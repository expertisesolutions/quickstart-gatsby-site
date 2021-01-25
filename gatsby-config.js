const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,

    {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          color: `tomato`,
          showSpinner: false,
        },
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
          //other options:
          //https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/?=gatsby-plugin-google-analytics
        },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/logo.png` //512x512
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !==  'production',
        // Add any options here
      },
    },

    /* define what is page and what is not */

    {

       // You can have multiple instances of this plugin
        // to create pages from React components in different directories.
        //
        // The following sets up the pattern of having multiple
        // "pages" directories in your project

        // You can also overwrite the default behavior for src/pages
        // This changes the page-creator instance used by Gatsby

      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        //ignore styles
        ignore: [`**/styles.js`],
      },
    },

    //use this plugin last, when using manifest
    `gatsby-plugin-offline`
  ],
};

/*
* for URL canonica
* gatsby-plugin-canonical-urls
*/


/*   
*                about plugin gatsby-plugin-react-helmet

* With this plugin, attributes you add in their component, e.g. title, meta 
* attributes, etc. will get added to the static HTML pages Gatsby builds.
*
* This is important not just for site viewers, but also for SEO — title and 
* description metadata stored in the document head is a key component used 
* by Google in determining placement in search results. 
*/