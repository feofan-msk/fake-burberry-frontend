import React from 'react';
import styled from 'styled-components';
import BtnContainer from './BtnContainer';

const Description = styled.section`background-color: #f3f3f3;`;
const Heading = styled.h1`
  font-family: Lora;
  font-weight: 400;
  font-size: 1.625rem;
  color: #171717;

  padding: 2rem 0 1rem;
  margin: 0;
  @media screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;
const Content = styled.p`
  opacity: 0.87;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #171717;

  padding: 0 0.5rem 0.5rem 0.5rem;
  margin: 0;

  @media screen and (min-width: 48rem) {
    padding-bottom: 1rem;
  }
`;
export default () =>
  (<Description>
    <div className="container">
      <Heading>Men’s Clothing</Heading>

      <div className="row">
        <div className="col-md-9 col-lg-7">
          <Content>
            Explore our menswear collection for the season. Sculptural knitwear, sweatshirts, artist
            overalls and oversized cabans feature alongside our signature trench coat in both
            heritage.
          </Content>
        </div>
      </div>
    </div>
    <BtnContainer />
  </Description>);
