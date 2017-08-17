import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

const Header = styled.header`
  display: flex;
  padding: 1.25rem 0;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
  }

  @media screen and (min-width: 62rem) {
    border-bottom: none;
    padding: 2rem;
  }
`;
const Menu = styled.img`
  width: 16px;
  height: 10px;
`;
const Link = styled.a``;
const Logo = styled.img`
  display: block;
  width: 166px;
  @media screen and (min-width: 62rem) {
    height: 1rem;
  }
`;

export default () =>
  (<Header>
    <Menu src={hamburger} alt="menu" />
    <Link href="index.jsx">
      <Logo src={logo} alt="Burberry-logo" />
    </Link>
  </Header>);
