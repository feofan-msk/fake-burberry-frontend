import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import ShowBtn from '../common/ShowBtn';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

const Header = styled.header`
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
const LocationSelector = styled(ShowBtn)`
  display: none;
  @media screen and (min-width: 48rem) {
    display: block;
    padding: 0;
    font-weight: 600;
    color: #999;
  }
`;

export default () =>
  (<div className="container">
    <Header className="row">
      <div className="col-xs-2 col-md-4">
        <HamburgerBtn />
        <LocationSelector>Shopping in: United Kingdom (£)</LocationSelector>
      </div>
      <div className="col-xs-8 col-md-4">
        <Link to="/">
          <Logo src={logo} alt="Burberry-logo" />
        </Link>
      </div>
    </Header>
    <Navigation />
  </div>);
