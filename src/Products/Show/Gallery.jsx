import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
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
  }
  @media screen and (min-width: 75rem) {
    height: 780px;
  }
`;

const Gallery = props => (
  <Wrapper>
    {props.images &&
      props.images.map(image => (
        <Image key={image} src={`${image}?$BBY_V2_ML_3X4$&hei=800&wid=600`} alt="Gallery photo" />
      ))}
  </Wrapper>
);

Gallery.propTypes = {
  images: PropTypes.node.isRequired,
};

export default Gallery;
