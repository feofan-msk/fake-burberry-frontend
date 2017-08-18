import React from 'react';
import styled from 'styled-components';
import { FormattedNumber, FormattedPlural } from 'react-intl';
import PropTypes from 'prop-types';
import { Link as LinkRouter } from 'react-router-dom';

import LikeIcon from '../assets/like.svg';

const Link = styled(LinkRouter)`
text-decoration: none;`;
const Card = styled.div`
  display: block;
  margin-bottom: 2rem;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  min-height: 196px;
  margin-bottom: 1rem;
`;
const TagLikeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const Label = styled.span`
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

  @media screen and (min-width: 48rem) {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.25rem;
  }
  @media screen and (min-width: 62rem) {
    line-height: 1.5rem;

    margin-top: 1rem;
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

function ProductCard(props) {
  return (
    <Link to={props.href}>
      <Card>
        <Image src={props.src} alt={props.alt} />
        <TagLikeWrapper>
          <Label>
            {props.label}
          </Label>
          <Like />
        </TagLikeWrapper>
        <Title>
          {props.title}
        </Title>
        <Colours>
          Available in{' '}
          <u>
            {props.ColoursAmount}{' '}
            <FormattedPlural value={props.ColoursAmount} one="colour" other="colours" />
          </u>
        </Colours>
        <Price>
          <FormattedNumber
            value={props.price}
            style="currency" // eslint-disable-line
            currency="RUB"
            minimumFractionDigits="0"
          />
        </Price>
      </Card>
    </Link>
  );
}

ProductCard.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  ColoursAmount: PropTypes.number.isRequired,
};

export default ProductCard;
