import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SectionBtn from '../../common/SectionBtn';

const Wrapper = styled.section`
  padding-bottom: 2rem;
  border-bottom: solid 1px #c6c6c6;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0 3rem;
    border: none;
  }
  @media screen and (min-width: 62rem) {
    padding: 0;
    margin: 4rem 0 2rem;
  }
`;
const Content = styled.article`
  margin-top: 2rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-family: Lora;
  font-weight: 400;
  color: #171717;
  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
  }

  p,
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
const Photo = styled.img`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    width: 100%;
  }
`;

const Description = props => (
  <Wrapper>
    <div className="row">
      <div className="col-xs-12 col-lg-4">
        <SectionBtn active>DESCRIPTION</SectionBtn>

        <Content dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>

      <div className="col-lg-8">
        {props.images && (
          <Photo src={`${props.images[1]}?$BBY_V2_ML_3X4$&hei=1225&wid=918`} alt="Delivery" />
        )}
      </div>
    </div>
  </Wrapper>
);

Description.propTypes = {
  content: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default Description;
