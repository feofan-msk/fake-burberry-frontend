import React from 'react';
import styled, { css } from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

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

const Link = styled(RouteLink)`
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
  `};
`;

export default () =>
  (<Navigation>
    <Link to="/">Women</Link>
    <Link active to="/men/clothing">
      Men
    </Link>
    <Link to="/">Children</Link>
    <Link to="/">Beauty</Link>
    <Link to="/">Experience</Link>
  </Navigation>);
