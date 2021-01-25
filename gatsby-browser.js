export { wrapRootElement } from './getsby/wrapRootElement';

/*
* for scripts:
* Global: set here;
* only on a given page: set directly on the page

https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr#reach-skip-nav
onRenderBody {function}
Ex global: 

export const onRenderBody = ( {
    setPostBodyComponents,
}) => {
    setPostBodyComponents([
        <script type="text/javascript" src="jquery.js"/>
    ])
}

or 

export const onRenderBody = ( {
    setPostBodyComponents,
}, pluginOptions) => {
    setPostBodyComponents([
        <script type="text/javascript" src="jquery.js"/>
    ])
}

*/

