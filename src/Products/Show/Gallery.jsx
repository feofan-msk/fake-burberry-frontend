import React from 'react';
import styled from 'styled-components';

const Gallery = styled.section`
  font-size: 0;
  white-space: nowrap;
  overflow-x: auto;
`;
const Image = styled.img`
  height: 400px;
  @media screen and (min-width: 48rem) {
    height: 576px;
  }

  @media screen and (min-width: 62rem) {
    height: 651px;
    width: 100%;
  }
`;

export default () =>
  (<Gallery>
    <Image src={`${process.env.PUBLIC_URL}/img/preview-1@2x.jpg`} alt="Photo 1" />
    <Image src={`${process.env.PUBLIC_URL}/img/preview-2@2x.jpg`} alt="Photo 2" />
    <Image src={`${process.env.PUBLIC_URL}/img/preview-3@2x.jpg`} alt="Photo 3" />
    <Image src={`${process.env.PUBLIC_URL}/img/preview-4@2x.jpg`} alt="Photo 4" />
  </Gallery>);
