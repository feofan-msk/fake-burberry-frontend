import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

const Header = styled.header`
  padding: 1rem 0;
  position: relative;
  text-align: center;
`;
const HamburgerBtn = styled.button`
  position: absolute;
  left: 2.5%;
  height: 0.625rem;
  width: 1rem;

  background: url(${hamburger}) no-repeat;
  border: none;
`;
const Link = styled.a``;
const Logo = styled.img`
  height: 0.75rem;
  @media screen and (min-width: 62rem) {
    height: 1rem;
  }
`;

export default () =>
  (<Header>
    <HamburgerBtn />

    <Link href="index.jsx">
      <Logo src={logo} alt="Burberry-logo" />
    </Link>
  </Header>);
