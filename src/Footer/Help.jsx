import React from 'react';
import styled from 'styled-components';

const Help = styled.section`@media screen and (min-width: 48rem) {display: none;}`;
const Heading = styled.h4`
  font-family: Raleway;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1rem;

  display: block;
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
  text-align: center;
  text-decoration: none;
`;
const LinkHelp = styled.a`
  font-size: 0.875rem;
  line-height: 1.0625rem;
  font-family: Lora;
  font-weight: 400;
  font-style: italic;

  display: block;
  text-align: center;
  text-decoration: none;
  color: #171717;
`;
export default () =>
  (<Help>
    <Heading>Need help?</Heading>
    <LinkHelp href="#">Find out more and contact us</LinkHelp>
  </Help>);
