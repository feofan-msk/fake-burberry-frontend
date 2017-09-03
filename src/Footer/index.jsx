import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Help from './Help';

const Footer = styled.footer`
  padding: 2rem 0;
  background-color: #f3f3f3;

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
    margin: 1.25rem 1.5rem 0 0;
  }
  @media screen and (min-width: 62rem) {
    margin: 2.25rem 3rem 0 0;
  }
`;
const BlackText = styled.span`color: #171717;`;

export default () => (
  <Footer>
    <div className="container">
      <Navigation />

      <Btn type="button">
        Shipping country: <BlackText>Russian Federation</BlackText>
      </Btn>
      <Btn type="button">
        Language: <BlackText>English</BlackText>
      </Btn>

      <Help />
    </div>
  </Footer>
);
