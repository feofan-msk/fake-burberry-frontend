import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import ShowBtn from '../common/ShowBtn';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

const Header = styled.header`
  padding: 1rem 0;
  position: relative;
  text-align: center;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0 0;
  }
  @media screen and (min-width: 62rem) {
    padding: 2rem 0 0;
  }
`;
const HamburgerBtn = styled.button`
  position: absolute;
  left: 2.5%;
  height: 0.625rem;
  width: 1rem;

  background: url(${hamburger}) no-repeat;
  border: none;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;
const Logo = styled.img`
  height: 0.75rem;
  @media screen and (min-width: 48rem) {
    height: 1rem;
  }
`;
const LocationSelector = styled(ShowBtn)`
  display: none;
  @media screen and (min-width: 48rem) {
    display: block;
    position: absolute;
    left: 1%;
    padding: 0;
    font-weight: 600;
    color: #999;
  }
`;

export default () =>
  (<Header>
    <HamburgerBtn />
    <LocationSelector>Shopping in: United Kingdom (£)</LocationSelector>
    <Link to="/">
      <Logo src={logo} alt="Burberry-logo" />
    </Link>

    <Navigation />
  </Header>);
