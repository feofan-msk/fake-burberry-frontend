import React from 'react';
import styled from 'styled-components';
import BtnContainer from './BtnContainer';

const Descr = styled.section`background-color: #f3f3f3;`;
const Heading = styled.h1`
  font-family: Lora;
  font-weight: 400;
  font-size: 1.625rem;
  color: #171717;

  padding: 2rem 0 1rem 0.5rem;
  margin: 0;
`;
const Content = styled.p`
  opacity: 0.87;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #171717;

  padding: 0 0.5rem 0.5rem 0.5rem;
  margin: 0;
`;
export default () =>
  (<Descr>
    <Heading>Men’s Clothing</Heading>
    <Content>
      Explore our menswear collection for the season. Sculptural knitwear, sweatshirts, artist
      overalls and oversized cabans feature alongside our signature trench coat in both heritage.
    </Content>
    <BtnContainer />
  </Descr>);
