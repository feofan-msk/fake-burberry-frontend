import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

const HamburgerBtn = styled.button`
  height: 0.625rem;
  width: 1rem;
  margin-top: 1rem;

  background: url(${hamburger}) no-repeat;
  border: none;
`;
const Link = styled.a``;
const Logo = styled.img`
  display: block;
  height: 0.75rem;
  margin: 1rem auto;
  @media screen and (min-width: 62rem) {
    height: 1rem;
  }
`;

export default () =>
  (<div className="container">
    <header className="row">
      <div className="col-xs-2">
        <HamburgerBtn />
      </div>

      <div className="col-xs-8">
        <Link href="index.jsx">
          <Logo src={logo} alt="Burberry-logo" />
        </Link>
      </div>
    </header>
  </div>);
