import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Product from './Product';
import Footer from './Footer';
import List from './List';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
    <Router>
      <div>
        <Header />
        <Route exact path="/products" component={List} />
        <Route
          exact
          path="/products/long-cotton-gabardine-car-coat-p39428531"
          component={Product}
        />
        <Footer />
      </div>
    </Router>
  </IntlProvider>);
