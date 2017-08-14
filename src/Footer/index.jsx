import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Help from './Help';

const Footer = styled.footer`
  padding: 2rem 1rem;
  background-color: #f3f3f3;
  @media screen and (min-width: 48rem) {
    padding: 2rem 0;
    margin-top: 4rem;
  }
  @media screen and (min-width: 62rem) {
    padding-top: 4rem;
  }
`;
const Btn = styled.button`
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #999;

  display: block;
  padding: 0;
  margin-bottom: 1rem;
  background: inherit;
  border: none;
  @media screen and (min-width: 48rem) {
    display: inline;
    margin: 1.25rem 1.25rem 0 0;
  }
`;

export default () =>
  (<Footer>
    <div className="container">
      <Navigation />

      <Btn type="button">Shipping country: Russian Federation</Btn>
      <Btn type="button">Language: English</Btn>

      <Help />
    </div>
  </Footer>);
