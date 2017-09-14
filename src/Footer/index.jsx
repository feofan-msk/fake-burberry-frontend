import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Help from './Help';
import LocationSelector from './LocationSelector';
import LanguageSelector from './LanguageSelector';
import { locations, languages } from '../data';

const Footer = styled.footer`
  padding: 2rem 0;
  margin-top: 3rem;
  background-color: #f3f3f3;

  @media screen and (min-width: 62rem) {
    padding-top: 4rem;
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
