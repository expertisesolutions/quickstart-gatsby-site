/*
 * search for configuration options on the website below:
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* add metadata from your site */
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.com`,
    description: `Blazing fast modern site generator for React`,
    /*Other information can be added here, for exemple:
    *
    *   social: [
    *     {
    *       name: 'github',
    *       url: 'https://github.com/ricardocvel'
    *     }
    *     {
    *       name: 'twitter',
    *       url: 'https://twitter.com'
    *     }
    * 
    *   ],
    *   footer: 'some text for footer'
    *   
    */
  },

  /*use the configuration below to build a sub site, such as a blog within a site.*/
  //pathPrefix: '/blog',

  plugins: [],
}


/*
* if the configuration file gets too big, 
* pass the settings to a config folder, so your structure is more organized
* in the next commit, you can check how it was
*/