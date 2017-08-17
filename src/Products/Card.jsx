import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import PropTypes from 'prop-types';
import LikeIcon from '../assets/like.svg';

const Card = styled.a`
  display: block;
  flex-basis: 45%;
  margin-bottom: 2rem;
  text-decoration: none;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
`;
const TagLikeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const Type = styled.span`
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;
const Like = styled.button`
  border: none;
  width: 0.875rem;
  height: 0.875rem;
  background: url(${LikeIcon});
`;
const Title = styled.h3`
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #171717;

  margin: 0 0 0.5rem;

  @media screen and (min-width: 62rem) {
    line-height: 1.5rem;

    margin-top: 1rem;
  }
`;
const Colors = styled.span`
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;

  margin-bottom: 0.25rem;
`;
const Price = styled.h5`
  margin: 0;
  padding-bottom: 1rem;

  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;

  @media  screen and (min-width: 62rem) {
  }
}
`;

function ProductCard(props) {
  return (
    <Card href={props.href}>
      <Image src={props.src} alt={props.alt} />
      <TagLikeWrapper>
        <Type>
          {props.type}
        </Type>
        <Like />
      </TagLikeWrapper>
      <Title>
        {props.title}
      </Title>
      <Colors>
        Available in <u>{props.colors_number} colours</u>
      </Colors>
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

ProductCard.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  colors_number: PropTypes.number.isRequired,
};

export default ProductCard;
