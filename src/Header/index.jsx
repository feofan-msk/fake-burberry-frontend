import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';
import arrow from '../assets/arrow.svg';

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
const LocationSelector = styled.button`
  display: none;
  @media screen and (min-width: 48rem) {
    position: relative;

    display: block;
    white-space: nowrap;
    padding: 0;
    margin: 0;

    border: none;
    background-color: transparent;
    font-family: Raleway;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #999;

    display: flex;
    align-items: center;
    cursor: pointer;
    opacity: ${props => (props.currentState && props.active ? '0.5' : '1')};
    opacity: ${props => (!props.currentState && props.active ? '0.5' : '1')};

    ::after {
      content: '';
      background-image: url(${arrow});
      margin-left: 0.5rem;
      background-size: contain;
      width: 0.75rem;
      height: 0.375rem;
      transform: ${props => (props.currentState ? 'rotate(180deg)' : 'none')};
    }
  }
`;

export default () => (
  <div className="container">
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
  </div>
);
