
import React from 'react';
import Html from '../html';

const DefaultLayout = ({ data }) => (
  <Html data={data}>
    <header>
      HEADER
    </header>

    <div id="content" />

    <footer>
      FOOTER
    </footer>
  </Html>
);

export default DefaultLayout;
