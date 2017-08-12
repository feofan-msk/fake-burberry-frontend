import React from "react";
import styled from "styled-components";
import Content from "./Content";

const Delivery = styled.section`
  display: none;
  @media screen and (min-width: 48rem) {
    display: block;
    margin-bottom: 3rem;
  }
  @media screen and (min-width: 62rem) {
    margin-bottom: 4rem;
  }
`;
const Image = styled.img`@media screen and (min-width: 48rem) {width: 100%;}`;

export default () => {
  return (
    <Delivery>
      <div className="row middle-lg">
        <div className="col-md-7">
          <Image
            src="img/delivery_pack@3x.jpg"
            srcset="img/delivery_pack@2x.jpg 2x, img/delivery_pack@3x.jpg 3x"
            alt="delivery image"
          />
        </div>

        <div className="col-lg-1" />

        <div className="col-md-5 col-lg-4">
          <Content />
        </div>
      </div>
    </Delivery>
  );
};
