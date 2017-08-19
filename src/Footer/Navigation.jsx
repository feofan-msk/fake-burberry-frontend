import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = styled.div`
  display: none;
  @media screen and (min-width: 48rem) {
    display: block;
  }
`;
const Title = styled.h4`
  @media screen and (min-width: 48rem) {
    margin: 0 0 1rem 0;
    padding: 0;
    font-family: Raleway;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.875rem;
    text-transform: uppercase;
    color: #171717;
  }
`;
const RouteLink = styled(Link)`
  @media screen and (min-width: 48rem) {
    display: block;
    margin-bottom: 0.75rem;
    font-family: Raleway;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #999999;
    text-decoration: none;
  }
`;
const Image = styled.img`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
`;
const UnderlinedLink = styled(Link)`
  display: none;
  @media screen and (min-width: 62rem) {
    display: inline;
    font-family: Raleway;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1rem;
    color: #171717;
    text-decoration: none;
    border-bottom: 1px solid #171717;
  }
`;

export default () =>
  (<Navigation>
    <div className="row">
      <div className="col-md-3">
        <Title>customer service</Title>
        <nav>
          <RouteLink to="/">Contact Us</RouteLink>
          <RouteLink to="/">Payment</RouteLink>
          <RouteLink to="/">Shipping</RouteLink>
          <RouteLink to="/">Returns</RouteLink>
          <RouteLink to="/">Faqs</RouteLink>
          <RouteLink to="/">Live Chat</RouteLink>
          <RouteLink to="/">The Burberry App</RouteLink>
          <RouteLink to="/">Store Locator</RouteLink>
        </nav>
      </div>

      <div className="col-md-3">
        <Title>our company</Title>
        <nav>
          <RouteLink to="/">Our History</RouteLink>
          <RouteLink to="/">Burberry Group Pic</RouteLink>
          <RouteLink to="/">Careers</RouteLink>
          <RouteLink to="/">Corporate Responsibility</RouteLink>
          <RouteLink to="/">Site Map</RouteLink>
        </nav>
      </div>

      <div className="col-md-3">
        <Title>legal &amp; cookies</Title>
        <nav>
          <RouteLink to="/">Terms &amp; Conditions</RouteLink>
          <RouteLink to="/">Privacy Policy</RouteLink>
          <RouteLink to="/">Cookie Policy</RouteLink>
          <RouteLink to="/">Accessibility Statement</RouteLink>
          <RouteLink to="/">Japan Only - SCTL indications</RouteLink>
        </nav>
      </div>
      <div className="col-md-3">
        <Image
          src="http://assets.burberry.com/is/image/Burberryltd/933f04c94a361dfd816c77528ec0e7286921051b.jpg?$BBY_V2_BASIC$&wid=474"
          alt="Store"
        />
        <UnderlinedLink to="/">Find a store</UnderlinedLink>
      </div>
    </div>
  </Navigation>);
