import styled from 'styled-components';
import React from 'react';
import Gallery from './Gallery';
import Info from './Info';
import Description from './Description';
import Photos from './Photos';
import Shipping from './Shipping';
import Delivery from './Delivery';
import Recommendations from './Recommendations';
import SimilarOffers from './SimilarOffers';

const Card = styled.div`
  background-color: transparent;
  @media screen and (min-width: 62rem) {
    background-color: #d4bdad;
  }
`;
const Title = styled.h1`
  margin: 1rem;
  font-family: 'Lora';
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;
  color: #171717;
  @media screen and (min-width: 48rem) {
    margin: 1.5rem 0.5rem 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

export default () =>
  (<div>
    <Card>
      <main className="container">
        <Title>Long Cotton Gabardine Car Coat</Title>

        <div className="row">
          <div className="col-xs-12 col-md-7 col-lg-6">
            <Gallery />
          </div>

          <div className="col-xs-12 col-md-5 col-lg-6">
            <Info />
          </div>
        </div>
      </main>
    </Card>
    <div className="container">
      <Description />
      <Photos />
      <Shipping />
      <Delivery />
      <Recommendations />
      <SimilarOffers />
    </div>
  </div>);
