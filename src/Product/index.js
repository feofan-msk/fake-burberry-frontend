import React from "react";
import Gallery from "./Gallery";
import Info from "./Info";
import Description from "./Description";
import Photos from "./Photos";
import Shipping from "./Shipping";
import Delivery from "./Delivery";
import Recommendations from "./Recommendations";
import SimilarOffers from "./SimilarOffers";
import styled from "styled-components";

const Card = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

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
const DesktopTitle = styled.h1`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
    font-family: Lora;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.75rem;
    color: #111;

    margin: 10rem 0 0.5rem;
  }
`;

export default () => {
  return (
    <main className="container">
      <Card>
        <Title>Long Cotton Gabardine Car Coat</Title>

        <div className="row">
          <div className="col-xs-12 col-md-7 col-lg-6">
            <Gallery />
          </div>

          <div className="col-xs-12 col-md-5 col-lg-6">
            <DesktopTitle>
              Long Cotton Gabardine Car Coat Coat Coat Coat Coat
            </DesktopTitle>

            <Info />
          </div>
        </div>
      </Card>
      <Description />
      <Photos />
      <Shipping />
      <Delivery />
      <Recommendations />
      <SimilarOffers />
    </main>
  );
};
