import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Photos = props => (
  <Wrapper>
    {props.images && (
      <div className="row">
        <div className="col-lg-4">
          <Photo src={`${props.images[2]}?$BBY_V2_ML_3X4$&hei=854&wid=640`} alt="Product photo" />
        </div>
        <div className="col-lg-4">
          <Photo src={`${props.images[3]}?$BBY_V2_ML_3X4$&hei=854&wid=640`} alt="Product photo" />
        </div>
        <div className="col-lg-4">
          <Photo src={`${props.images[4]}?$BBY_V2_ML_3X4$&hei=854&wid=640`} alt="Product photo" />
        </div>
      </div>
    )}
  </Wrapper>
);

Photos.propTypes = {
  images: PropTypes.string.isRequired,
};

export default Photos;
