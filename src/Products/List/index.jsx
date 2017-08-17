import React from 'react';
import { Helmet } from 'react-helmet';
import Descr from './Description';

export default () =>
  (<div>
    <Helmet>
      <title>Men’s clothing | Burberry</title>
      <meta
        name="description"
        content="Menswear collection for the season. Knitwear, sweatshirts, oversized cabans"
      />
    </Helmet>
    <Descr />
  </div>);
