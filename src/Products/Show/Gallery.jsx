import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  font-size: 0;
  white-space: nowrap;
  overflow-x: hidden;
`;
const Image = styled.img`
  opacity: ${props => (props.show ? '1' : '0')};
  transition: opacity 0.3s linear;
  height: 400px;
  @media screen and (min-width: 48rem) {
    height: 576px;
  }

  @media screen and (min-width: 62rem) {
    height: 651px;
  }

  @media screen and (min-width: 75rem) {
    height: 780px;
  }
`;

const Gallery = props => (
  <Wrapper>
    {props.colours && (
      <Image
        src={`${props.colours[props.activeColourIndex].heroSrc}?$BBY_V2_ML_4X3$&hei=1100&wid=2250`}
        alt="Gallery photo"
        onLoad={props.imageLoaded}
        show={props.isImageLoaded}
      />
    )}

    {props.colours &&
      props.colours.map(image => (
        <Image
          src={`${image.heroSrc}?$BBY_V2_ML_4X3$&hei=1100&wid=2250`}
          alt="Gallery photo"
          onLoad={props.imageLoaded}
          show={props.isImageLoaded}
        />
      ))}
  </Wrapper>
);

Gallery.propTypes = {
  colours: PropTypes.node.isRequired,
  activeColourIndex: PropTypes.number.isRequired,
  imageLoaded: PropTypes.func.isRequired,
  isImageLoaded: PropTypes.bool.isRequired,
};

export default Gallery;
