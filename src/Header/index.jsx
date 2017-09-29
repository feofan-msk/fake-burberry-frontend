import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import LocationSelector from './Selector';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

const HeaderStyled = styled.header`
  padding: 1.125rem 0;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0 0;
  }
  @media screen and (min-width: 62rem) {
    padding: 2rem 0 0;
  }
`;
const HamburgerBtn = styled.button`
  display: block;
  height: 0.625rem;
  width: 1rem;

  background: url(${hamburger}) no-repeat;
  border: none;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;
const Logo = styled.img`
  display: block;
  margin: 0 auto;
  height: 0.75rem;
  @media screen and (min-width: 48rem) {
    height: 1rem;
  }
`;

const Header = props => (
  <div className="container">
    <HeaderStyled className="row">
      <div className="col-xs-2 col-md-4">
        <HamburgerBtn onClick={props.handleSideNavClick} />
        <LocationSelector />
      </div>
      <div className="col-xs-8 col-md-4">
        <Link to="/">
          <Logo src={logo} alt="Burberry-logo" />
        </Link>
      </div>
    </HeaderStyled>
    <Navigation />
  </div>
);

Header.propTypes = {
  handleSideNavClick: PropTypes.func.isRequired,
};

export default Header;
