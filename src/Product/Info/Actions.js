import React from 'react';
import styled, { css } from 'styled-components';

const Section = styled.div`
  padding: 0 .5rem;
  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const ActionButton = styled.button`
  padding: 1rem 0;
  width: 100%;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 16px;
  border-radius: 2px;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 62rem) {
    display: inline-block;
    max-width: 232px;
  }
`;

const PrimaryButton = ActionButton.extend`
  background: #171717;
  color: #fff;
  box-shadow: inset 0px 0px 0px 1px #171717;

  @media screen and (min-width: 62rem) {
    display: none;
  }

  ${props => (props.name === 'addtobag' && css`
    display: none;

    @media screen and (min-width: 62rem) {
      display: inline-block;
      margin-right: 1rem;
  }
  `)}
`;

const SecondaryButton = ActionButton.extend`
  margin-top: 1rem;
  background: #fff;
  color: #171717;
  box-shadow: inset 0px 0px 0px 1px #999999;

  @media screen and (min-width: 62rem) {
    margin-top: 0;
    background: transparent;
    box-shadow: inset 0px 0px 0px 1px #171717;
  }
`;

const HelpButton = styled.button`
  display: inline-block;
  margin: 1.5rem 0 1rem 0;
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 16px;
  color: #171717;
  background: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

export default () => (
  <Section>
    <PrimaryButton type="button">select a size</PrimaryButton>
    <PrimaryButton name="addtobag" type="button">add to bag</PrimaryButton>
    <SecondaryButton type="button">find in store</SecondaryButton>
    <HelpButton type="button">need size help?</HelpButton>
  </Section>
);
