import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Product from './Products/Show';
import List from './Products/List';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () =>
  (<IntlProvider locale="ru">
    <Router>
      <div>
        <Header />
        <Redirect from="/" to="/men/clothing" />
        <Route exact path="/men/clothing" component={List} />
        <Route exact path="/men/clothing/long-cotton-gabardine-id39428531" component={Product} />
        <Footer />
      </div>
    </Router>
  </IntlProvider>);
