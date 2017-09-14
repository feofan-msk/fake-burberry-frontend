import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Subheading from '../../common/Subheading';
import Card from '../Card';

const Wrapper = styled.section`
  margin: 3rem 0 1rem;
  @media screen and (min-width: 48rem) {
    margin: 1.25rem 0 0;
  }
  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Recommendations = props => (
  <Wrapper>
    <Subheading>WE RECOMMEND</Subheading>

    <div className="row">
      {props.recommendedProducts &&
        props.recommendedProducts.map(product => (
          <div className="col-xs-6 col-md-3" key={product.id}>
            <Card
              to={`/mens/suits/${product.slug}`}
              title={product.title}
              coloursAmount={product.colours.length}
              price={product.multiCurrencyPrices.RUB / 100}
              image={`${product.images[0]}?$BBY_V2_ML_3X4$&hei=866&wid=650`}
              id={parseInt(product.id, 10)}
            />
          </div>
        ))}
    </div>
  </Wrapper>
);

Recommendations.propTypes = {
  recommendedProducts: PropTypes.node.isRequired,
};

export default Recommendations;
