import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import PropTypes from 'prop-types';

const Card = styled.a`
  flex-basis: 45%;
  margin-bottom: 2rem;
  text-decoration: none;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Title = styled.h3`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  font-family: Lora;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.19;
  color: #171717;

  @media screen and (min-width: 62rem) {
    font-family: Raleway;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.5rem;

    margin-top: 1rem;
  }
`;
const Price = styled.h5`
  margin: 0;
  padding-left: 1px;

  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: #999;

  @media  screen and (min-width: 62rem) {
    line-height: 1rem;
    color: #171717;
  }
}
`;

function RecommendCard(props) {
  return (
    <Card href={props.href}>
      <Image src={props.src} alt={props.alt} />
      <Title>
        {props.title}
      </Title>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency" // eslint-disable-line
          currency="RUB"
          minimumFractionDigits="0"
        />
      </Price>
    </Card>
  );
}

RecommendCard.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default RecommendCard;
