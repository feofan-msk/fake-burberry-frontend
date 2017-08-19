import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const Link = styled(NavLink)`
  padding: 1rem;

  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 1.5px;
  color: #999;
  text-transform: uppercase;
  text-decoration: none;
  &.active {
    color: #171717;
    border-bottom: 1px solid #171717;
  }
`;

export default () =>
  (<Navigation>
    <Link to="/women">Women</Link>
    <Link to="/men/clothing">Men</Link>
    <Link to="/children">Children</Link>
    <Link to="/beaty">Beauty</Link>
    <Link to="/experience">Experience</Link>
  </Navigation>);
