import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Help from './Help';
import LocationSelector from './LocationSelector';
import LanguageSelector from './LanguageSelector';
import { locations, languages } from '../data';

const Footer = styled.footer`
  padding: 2rem 0;
  background-color: #f3f3f3;

  @media screen and (min-width: 62rem) {
    padding-top: 4rem;
  }

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

export default () => (
  <Footer>
    <div className="container">
      <Navigation />

      <LocationSelector locations={locations} />
      <LanguageSelector languages={languages} />

      <Help />
    </div>
  </Footer>
);
