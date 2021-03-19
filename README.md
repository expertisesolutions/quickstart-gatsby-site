<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://github.com/expertisesolutions/quickstart-gatsby-site">
    <img alt="Gatsby" src="https://github.com/expertisesolutions/quickstart-gatsby-site/blob/master/src/assets/logo.png?raw=true" width="60" />
  </a>
</p>
<h1 align="center">
  quickstart-gatsby-site
</h1>

Customized structure Expertise Soluctions for development of static websites with gatsby.

_Server Model [When possible to put the server link here](https://github.com/expertisesolutions/quickstart-gatsby-site/)._

## 🚀 start

1.  **Starting to developing.**

    Start the project.

    ```shell
    >git clone https://github.com/expertisesolutions/quickstart-gatsby-site/
    ```

2.  **Install dependencies.**

    Navigate to your new website directory and install the /node_modues
    dependencies.

    ```shell
    >cd quickstart-gatsby-site/
    >yarn install
    ```
3.  **Serve your website.**

    Still on your website directory, tell yarn or gatsby to serve your website
    locally.

    ```shell
    >yarn start
    ```
    or
    ```shell
    >gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_.
    This is a tool you can use to experiment with querying your data. Learn
    more about using this tool in the [Gatsby
    tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `quickstart-gatsby-site` directory in your code editor of choice
    and edit `src/pages/index.js`. Save your changes and the browser will
    update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── config
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/config`**: Directory for the insertion of metadata and plugins that have a very long configuration.

3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

6.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

7.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

8.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

9.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

10. **`LICENSE`**: License used by Expertise Solutions.

11. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

12. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

13. **`README.md`**:A text file containing useful reference information about the project.

## Plugins and gatsby-config.js

1. **`siteMetadata`**: When you want to reuse common pieces of data across the site (for example, your site title), you can store that data in siteMetadata, path ./config/metadata.js.
1. **`gatsby-plugin-react-helmet`**:Provides drop-in support for server rendering data added with React Helmet (uses react-helmet).
1. **`gatsby-plugin-sitemap`**:Create a sitemap for your Gatsby site.
>NOTE: This plugin only generates output when run in production mode! To test your sitemap, run: gatsby build && gatsby serve
1. **`gatsby-plugin-nprogress`**: Automatically shows the nprogress indicator when a page is delayed in loading (which Gatsby considers as one second after clicking on a link).
1. **`gatsby-plugin-google-analytics`**:This plugin uses Google’s analytics.js file under the hood.
1. **`gatsby-plugin-manifest`**:The web app manifest (part of the PWA specification) enabled by this plugin allows users to add your site to their home screen on most mobile browsers — see here. The manifest provides configuration and icons to the phone.
1. **`gatsby-plugin-styled-components`**:A Gatsby plugin for styled-components with built-in server-side rendering support.
1. **`gatsby-plugin-page-creator`**:Gatsby plugin that automatically creates pages from React components in specified directories. Gatsby includes this plugin automatically in all sites for creating pages from components in src/pages. You can also leverage the File System Route API to programmatically create pages from your data.(You may include another instance of this plugin if you’d like to create additional “pages” directories or want to override the default usage.)
1. **`gatsby-plugin-offline`**:Adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections. It uses Workbox Build to create a service worker for the site and loads the service worker into the client. ( If you’re using this plugin with gatsby-plugin-manifest (recommended) this plugin should be listed after that plugin so the manifest file can be included in the service worker.)
- Optional
    - **` gatsby-plugin-canonical-urls`**:if necessary the creation of canonical urls, an important tool for seo

## 🎓 Learning Gatsby


- **consult  [documentation](https://www.gatsbyjs.com/docs/).** check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->
