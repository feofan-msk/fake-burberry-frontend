import React from 'react';
import styled, { css } from 'styled-components';

const Navigation = styled.nav`
  display: none;
  @media screen and (min-width: 48rem) {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }
  @media screen and (min-width: 62rem) {
    margin-top: 2rem;
  }
`;

const Link = styled.a`
  padding: 1rem;

  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 1.5px;
  color: #999;
  text-transform: uppercase;
  text-decoration: none;
  ${props =>
    props.active &&
    css`
    color: #171717;
    border-bottom: 1px solid #171717;
    letter-spacing: normal;
  `};
`;

export default () =>
  (<Navigation>
    <Link href="#">Women</Link>
    <Link active href="#">
      Men
    </Link>
    <Link href="#">Children</Link>
    <Link href="#">Beauty</Link>
    <Link href="#">Experience</Link>
  </Navigation>);
