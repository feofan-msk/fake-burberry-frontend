import React from "react";
import Gallery from "./Gallery";
import Info from "./Info/Info";
import Actions from "./Actions/Actions";
import styled from "styled-components";

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
`;

export default () => {
  return (
    <section>
      <Title>Long Cotton Gabardine Car Coat</Title>

      <div className="row">
        <div className="col-xs-12 col-md-7">
          <Gallery />
        </div>

        <div className="col-xs-12 col-md-5">
          <Info />

          <Actions />
        </div>
      </div>
    </section>
  );
};
