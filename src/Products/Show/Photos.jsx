import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;
  div:nth-child(1) {
    padding-top: 2rem;
  }
  div:nth-child(2) {
    padding-top: 6rem;
  }
  @media screen and (min-width: 62rem) {
    display: block;
    margin-bottom: 4rem;
  }
`;

const Photo = styled.img`
  @media screen and (min-width: 62rem) {
    display: block;
    height: 420px;
  }
  @media screen and (min-width: 75em) {
    height: 485px;
  }
`;

export default () => (
  <Wrapper>
    <div className="row">
      <div className="col-lg-4">
        <Photo
          src={`${process.env.PUBLIC_URL}/img/desktop-photo-1@2x.jpg`}
          alt="Long Cotton Gabardine Car Coat"
        />
      </div>
      <div className="col-lg-4">
        <Photo
          src={`${process.env.PUBLIC_URL}/img/desktop-photo-2@2x.jpg`}
          alt="Long Cotton Gabardine Car Coat"
        />
      </div>
      <div className="col-lg-4">
        <Photo
          src={`${process.env.PUBLIC_URL}/img/desktop-photo-3@2x.jpg`}
          alt="Long Cotton Gabardine Car Coat"
        />
      </div>
    </div>
  </Wrapper>
);
