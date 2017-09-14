import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  font-size: 0;
  white-space: nowrap;
  overflow-x: hidden;
`;
const Image = styled.img`
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
      />
    )}
  </Wrapper>
);

Gallery.propTypes = {
  colours: PropTypes.node.isRequired,
  activeColourIndex: PropTypes.number.isRequired,
};

export default Gallery;
