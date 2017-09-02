import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import SideNav from './SideNavigation';
import Header from './Header';
import Product from './Products/Show';
import List from './Products/List';
import Footer from './Footer';

addLocaleData(ruLocaleData);

const PageWrapper = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
`;

const Page = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
  ${props => props.isSideNavOpened && css`transform: translate3d(274px, 0, 0);`};
  background: #fff;
`;
const PageOverlay = styled.button`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
`;

class App extends Component {
  state = {
    isSideNavOpened: false,
  };

  toggleSideNav = () => {
    this.setState(prevState => ({
      isSideNavOpened: !prevState.isSideNavOpened,
    }));
  };

  render() {
    return (
      <IntlProvider locale="ru">
        <Router>
          <PageWrapper>
            <Helmet>
              <title>Burberry | Iconic British Luxury Brand Est. 1856</title>
            </Helmet>

            <SideNav />

            <Page isSideNavOpened={this.state.isSideNavOpened}>
              {this.state.isSideNavOpened && <PageOverlay onClick={this.toggleSideNav} />}
              <Header onHamburgerClick={this.toggleSideNav} />

              <Redirect from="/" to="/men/clothing" />
              <Route exact path="/:category/:section" component={List} />
              <Route exact path="/:category/:section/:id" component={Product} />

              <Footer />
            </Page>
          </PageWrapper>
        </Router>
      </IntlProvider>
    );
  }
}
export default App;
