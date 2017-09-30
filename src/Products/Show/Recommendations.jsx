import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Subheading from '../../common/Subheading';
import Card from '../Card';

const Wrapper = styled.section`
  margin: 3rem 0 1rem;
  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Recommendations = (props, { category = props.category, section = props.section }) => (
  <Wrapper>
    <Subheading>WE RECOMMEND</Subheading>

    <div className="row">
      {props.recommendedProducts &&
        props.recommendedProducts.map(product => (
          <div className="col-xs-6 col-md-3" key={product.id}>
            <Card
              to={`/${category}/${section}/${product.slug}`}
              title={product.title}
              coloursAmount={product.colours.length}
              price={product.multiCurrencyPrices.RUB / 100}
              images={product.images}
              id={parseInt(product.id, 10)}
            />
          </div>
        ))}
    </div>
  </Wrapper>
);

Recommendations.propTypes = {
  recommendedProducts: PropTypes.node.isRequired,
  section: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Recommendations;
