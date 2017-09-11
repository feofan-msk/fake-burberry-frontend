import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedNumber, FormattedPlural } from 'react-intl';
import PropTypes from 'prop-types';
import { Link as RouteLink } from 'react-router-dom';

import LikeIcon from '../common/LikeIcon';

const Link = styled(RouteLink)`text-decoration: none;`;
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
  align-items: flex-start;
`;
const Label = styled.p`
  margin: 0 0 0.5rem;

  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
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
const LikeButton = styled.button`
  padding: 0;
  border: 0;
  outline: none;
  background: none;
  cursor: pointer;
`;

class ProductCard extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  state = {
    isActive: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    return (
      <Card>
        <Link to={`/men/suits/${this.props.slug}`}>
          <Image src={this.props.image} alt={this.props.title} />
        </Link>
        <InfoWrapper>
          <Link to={`/men/suits/${this.props.slug}`}>
            <Label>{this.props.label}</Label>

            <Title>{this.props.title}</Title>

            <Colours>
              Available in{' '}
              <Underline>
                {this.props.coloursAmount}{' '}
                <FormattedPlural value={this.props.coloursAmount} one="colour" other="colours" />
              </Underline>
            </Colours>

            <Price>
              <FormattedNumber
                value={this.props.price}
                style="currency" // eslint-disable-line
                currency="RUB"
                minimumFractionDigits="0"
              />
            </Price>
          </Link>

          <LikeButton onClick={this.toggle}>
            <LikeIcon fill={this.state.isActive ? '#171717' : 'none'} />
          </LikeButton>
        </InfoWrapper>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  label: PropTypes.string,
  coloursAmount: PropTypes.number,
};

ProductCard.defaultProps = {
  label: 'Relaxed fit',
  coloursAmount: '1',
};

export default ProductCard;
