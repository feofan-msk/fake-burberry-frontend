import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Product from './Products/Show';
import List from './Products/List';
import Footer from './Footer';

addLocaleData(ruLocaleData);

export default () => (
  <IntlProvider locale="ru">
    <Router>
      <div>
        <Helmet>
          <title>Burberry | Iconic British Luxury Brand Est. 1856</title>
        </Helmet>

        <Header />
        
        <Redirect from="/" to="/men/clothing" />

        <Route exact path="/" component={List} />
        <Route exact path="/:category/:section" component={List} />
        <Route exact path="/:category/:section/:id" component={Product} />
        <Footer />
      </div>
    </Router>
  </IntlProvider>
);
