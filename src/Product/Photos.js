import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: none;

  @media (min-width: 62rem) {
    display: block;
    margin-bottom: 4rem;
  }
`;

const Photo = styled.img`
  display: block;
  min-width: 100%;

  ${props =>
    props.left &&
    css`
    padding-top: 2rem;
  `} ${props =>
      props.center &&
      css`
    padding-top: 6rem;
  `};
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
