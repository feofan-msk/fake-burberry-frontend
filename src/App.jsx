import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Product from './Product';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
    <div>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        <meta
          name="description"
          content="A refined car coat crafted in protective cotton gabardine."
        />
      </Helmet>
      <Header />
      <Product />
      <Footer />
    </div>
  </IntlProvider>);
