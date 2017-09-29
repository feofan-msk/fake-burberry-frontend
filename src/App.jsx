import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import ScrollToTop from './ScrollToTop';
import SideNav from './SideNavigation';
import Header from './Header';
import Product from './Products/Show';
import List from './Products/List';
import Footer from './Footer';

addLocaleData(ruLocaleData);

const store = configureStore();

const PageWrapper = styled.section`overflow-x: hidden;`;

const Page = styled.section`
  transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  ${props =>
    props.isSideNavOpened &&
    css`
      transform: translateX(274px);
      height: 100vh;
      overflow: hidden;
    `};
`;
const PageOverlay = styled.button`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: black;
  opacity: 0.3;
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
      <Provider store={store}>
        <IntlProvider locale="ru">
          <Router>
            <ScrollToTop>
              <PageWrapper>
                <SideNav isOpened={this.state.isSideNavOpened} />

                <Page isSideNavOpened={this.state.isSideNavOpened}>
                  {this.state.isSideNavOpened && <PageOverlay onClick={this.toggleSideNav} />}
                  <Header handleSideNavClick={this.toggleSideNav} />

                  <Switch>
                    <Redirect exact from="/" to="/men/suits" />
                    <Route exact path="/:category" component={List} />
                    <Route exact path="/:category/:section" component={List} />
                    <Route exact path="/:category/:section/:id" component={Product} />
                  </Switch>

                  <Footer />
                </Page>
              </PageWrapper>
            </ScrollToTop>
          </Router>
        </IntlProvider>
      </Provider>
    );
  }
}
export default App;
