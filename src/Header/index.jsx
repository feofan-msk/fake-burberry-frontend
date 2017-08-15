import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const Header = styled.header`
  font-size: 0;
  text-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
  }
  @media screen and (min-width: 62rem) {
    border-bottom: none;
    padding: 2rem;
  }
`;

const Logo = styled.img`@media screen and (min-width: 62rem) {height: 1rem;}`;

export default () =>
  (<Header>
    <a href="index.jsx">
      <Logo src={logo} alt="Burberry-logo" />
    </a>
  </Header>);
