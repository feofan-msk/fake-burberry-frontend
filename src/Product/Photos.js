import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: none;
  div:nth-child(1) {
    padding-top: 2rem;
  }
  div:nth-child(2) {
    padding-top: 6rem;
  }
  @media (min-width: 62rem) {
    display: block;
    margin-bottom: 4rem;
  }
`;

const Photo = styled.img`
  @media (min-width: 62rem) {
    display: block;
    height: 420px;
    min-width: 100%;
  }
`;

export default () => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-lg-4">
          <Photo
            src="/img/desktop-photo-1.jpg"
            srcSet="/img/desktop-photo-1@2x.jpg 2x, /img/desktop-photo-1@3x.jpg 3x"
            alt="Long Cotton Gabardine Car Coat"
            left
          />
        </div>
        <div className="col-lg-4">
          <Photo
            src="/img/desktop-photo-2.jpg"
            srcSet="/img/desktop-photo-2@2x.jpg 2x, /img/desktop-photo-2@3x.jpg 3x"
            alt="Long Cotton Gabardine Car Coat"
            center
          />
        </div>
        <div className="col-lg-4">
          <Photo
            src="/img/desktop-photo-3.jpg"
            srcSet="/img/desktop-photo-3@2x.jpg 2x, /img/desktop-photo-3@3x.jpg 3x"
            alt="Long Cotton Gabardine Car Coat"
          />
        </div>
      </div>
    </Wrapper>
  );
};
