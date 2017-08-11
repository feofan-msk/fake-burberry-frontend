import React from "react";
import styled from "styled-components";

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
const Link = styled.nav`
  @media screen and (min-width: 48rem) {
    a {
      display: block;
      margin-bottom: 0.75rem;
      font-family: Raleway;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1rem;
      color: #999999;
      text-decoration: none;
    }
  }
`;

export default () => {
  return (
    <Navigation>
      <div className="row">
        <div className="col-md-3">
          <Title>customer service</Title>
          <Link>
            <a href="#">Contact Us</a>
            <a href="#">Payment</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Faqs</a>
            <a href="#">Live Chat</a>
            <a href="#">The Burberry App</a>
            <a href="#">Store Locator</a>
          </Link>
        </div>

        <div className="col-md-3">
          <Title>our company</Title>
          <Link>
            <a href="#">Our History</a>
            <a href="#">Burberry Group Pic</a>
            <a href="#">Careers</a>
            <a href="#">Corporate Responsibility</a>
            <a href="#">Site Map</a>
          </Link>
        </div>

        <div className="col-md-4">
          <Title>legal &amp; cookies</Title>
          <Link>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Accessibility Statement</a>
            <a href="#">Japan Only - SCTL indications</a>
          </Link>
        </div>
      </div>
    </Navigation>
  );
};
