import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../src/styles/themes/light';

//https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/

export function wrapRootElement ({ element }) {
  return <ThemeProvider theme={light}>{element}</ThemeProvider>;
}