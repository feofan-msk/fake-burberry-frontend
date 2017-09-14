import React from 'react';
import styled from 'styled-components';
import Content from './Content';

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

export default () => (
  <Delivery>
    <div className="row middle-lg">
      <div className="col-md-7">
        <Image
          src={
            'https://assets.burberry.com/is/image/Burberryltd/c4f8224a4727d674516f49dfc7c8d50cbec5bc7c.jpg?$BBY_V2_ML_4X3$&hei=648&wid=864'
          }
          alt="Delivery image"
        />
      </div>

      <div className="col-md-5 col-lg-offset-1 col-lg-4">
        <Content />
      </div>
    </div>
  </Delivery>
);
