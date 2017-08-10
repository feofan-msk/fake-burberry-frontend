import React from 'react'
import styled from 'styled-components'

const Gallery = styled.section`
  font-size: 0;
  white-space: nowrap;
  overflow-x: auto;
`
const GalerryImage = styled.img`
  height: 400px;
  @media screen and (min-width: 48rem) {
    height: 576px;
  }
`

export default () => {
  return (
    <Gallery>
      <GalerryImage src="img/preview-1@3x.jpg" srcset="img/preview-1@2x.jpg 2x, img/preview-1@3x.jpg 3x" alt="Photo 1" />
      <GalerryImage src="img/preview-2@3x.jpg" srcset="img/preview-2@2x.jpg 2x, img/preview-2@3x.jpg 3x" alt="Photo 2" />
      <GalerryImage src="img/preview-3@3x.jpg" srcset="img/preview-3@2x.jpg 2x, img/preview-3@3x.jpg 3x" alt="Photo 3" />
      <GalerryImage src="img/preview-4@3x.jpg" srcset="img/preview-4@2x.jpg 2x, img/preview-4@3x.jpg 3x" alt="Photo 4" />
    </Gallery>
  );
};