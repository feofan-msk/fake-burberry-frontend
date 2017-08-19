import React from 'react';
import styled from 'styled-components';
import { FormattedNumber, FormattedPlural } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LikeIcon from '../assets/like.svg';

const RouteLink = styled(Link)`
text-decoration: none;`;
const Card = styled.div`
  display: block;
  margin-bottom: 2rem;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.p`
  margin: 0 0 0.5rem;

  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;
const Like = styled.button`
  border: none;
  width: 15px;
  height: 14px;
  background: url(${LikeIcon});
  background-repeat: no-repeat;
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #171717;

  margin: 0 0 0.5rem;

  @media screen and (min-width: 48rem) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  @media screen and (min-width: 62rem) {
    font-size: 1rem;
  }
`;
const Colours = styled.div`
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;

  margin-bottom: 0.25rem;
`;
const Price = styled.h5`
  margin: 0;

  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
}
`;
const Underline = styled.span`border-bottom: 1px solid #171717;`;

function ProductCard(props) {
  return (
    <Card>
      <RouteLink to={props.to}>
        <Image src={props.src} alt={props.alt} />
      </RouteLink>
      <InfoWrapper>
        <RouteLink to={props.to}>
          <Label>
            {props.label}
          </Label>

          <Title>
            {props.title}
          </Title>

          <Colours>
            Available in{' '}
            <Underline>
              {props.ColoursAmount}{' '}
              <FormattedPlural value={props.ColoursAmount} one="colour" other="colours" />
            </Underline>
          </Colours>

          <Price>
            <FormattedNumber
              value={props.price}
              style="currency" // eslint-disable-line
              currency="RUB"
              minimumFractionDigits="0"
            />
          </Price>
        </RouteLink>

        <Like />
      </InfoWrapper>
    </Card>
  );
}

ProductCard.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  ColoursAmount: PropTypes.number.isRequired,
};

export default ProductCard;
