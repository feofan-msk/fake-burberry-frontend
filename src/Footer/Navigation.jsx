import React from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

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
const Link = styled(RouteLink)`
  @media screen and (min-width: 48rem) {
    display: block;
    margin-bottom: 0.75rem;
    font-family: Raleway;
    font-weight: 00;
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

export default () => (
  <Navigation>
    <div className="row">
      <div className="col-md-3">
        <Title>customer service</Title>
        <nav>
          <Link to="/">Contact Us</Link>
          <Link to="/">Payment</Link>
          <Link to="/">Shipping</Link>
          <Link to="/">Returns</Link>
          <Link to="/">Faqs</Link>
          <Link to="/">Live Chat</Link>
          <Link to="/">The Burberry App</Link>
          <Link to="/">Store Locator</Link>
        </nav>
      </div>

      <div className="col-md-3">
        <Title>our company</Title>
        <nav>
          <Link to="/">Our History</Link>
          <Link to="/">Burberry Group Pic</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Corporate Responsibility</Link>
          <Link to="/">Site Map</Link>
        </nav>
      </div>

      <div className="col-md-3">
        <Title>legal &amp; cookies</Title>
        <nav>
          <Link to="/">Terms &amp; Conditions</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Cookie Policy</Link>
          <Link to="/">Accessibility Statement</Link>
          <Link to="/">Japan Only - SCTL indications</Link>
        </nav>
      </div>
      <div className="col-md-3">
        <Image
          src="https://assets.burberry.com/is/image/Burberryltd/933f04c94a361dfd816c77528ec0e7286921051b.jpg?$BBY_V2_BASIC$&wid=474"
          alt="Store"
        />
        <UnderlinedLink to="/">Find a store</UnderlinedLink>
      </div>
    </div>
  </Navigation>
);
