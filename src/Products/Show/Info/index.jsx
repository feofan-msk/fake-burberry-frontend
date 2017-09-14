import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import React from 'react';
import PropTypes from 'prop-types';

import ColourPanel from './Colour';
import SizeWrapper from './Size';
import ActionBtn from './ActionBtn';

const Title = styled.h1`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
    font-family: Lora;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.75rem;
    color: #111;

    margin: 10rem 0 0.5rem;
  }
`;
const Wrapper = styled.section`
  box-sizing: border-box;
  margin: 1rem 0 2rem;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    margin: 0;
    margin-bottom: 2rem;
    border: none;
  }
  @media screen and (min-width: 62rem) {
    margin-bottom: 1.5rem;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  @media screen and (min-width: 62rem) {
    margin-bottom: 3rem;
  }
`;
const Price = styled.h2`
  margin: 0;
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.19;
  color: #171717;
  @media screen and (min-width: 62rem) {
    font-weight: 500;
  }
`;
const Id = styled.p`
  margin: 0;
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  padding-top: 0.125rem;
  @media screen and (min-width: 62rem) {
    display: none;
  }
`;
const Actions = styled.section`
  padding: 0 0 3rem;
  @media screen and (min-width: 48rem) {
    padding: 1rem 0 0;
  }
`;
const PrimaryBtn = styled(ActionBtn)`
  color: #fff;
  background-color: #171717;
  @media screen and (min-width: 62rem) {
    display: none;
  }
`;
const SecondaryBtn = styled(ActionBtn)`
  color: #171717;
  background-color: transparent;
`;
const BuyBtn = styled(PrimaryBtn)`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
  }
`;
const TextBtn = styled.button`
  display: block;
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
  background-color: transparent;
  border: none;

  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  @media screen and (min-width: 62rem) {
    display: none;
  }
`;
const Details = styled.div`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    margin-top: 0.5rem;
  }
`;

const SubHeader = styled.h3`
  margin: 0 0 0.25rem;
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: bold;
  color: #171717;
`;

const Text = styled.div`
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  font-size: 0.75rem;
  color: #171717;
`;

const Info = props => (
  <Wrapper>
    <Title>{props.title}</Title>

    <InfoWrapper>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency" // eslint-disable-line
          currency="RUB"
          minimumFractionDigits="0"
        />
      </Price>
      <Id>Item {props.id}</Id>
    </InfoWrapper>

    <div className="row">
      <div className="col-xs-12 col-md-12 col-lg-6">
        <ColourPanel
          colours={props.colours}
          activeColourIndex={props.activeColourIndex}
          selectColour={props.selectColour}
        />
      </div>

      <div className="col-xs-12 col-md-12 col-lg-6">
        <SizeWrapper sizes={props.sizes} />
      </div>
    </div>

    <Actions>
      <div className="row">
        <div className="col-xs-12 col-md-12 col-lg-6">
          <PrimaryBtn>SELECT A SIZE</PrimaryBtn>
          <BuyBtn>ADD TO BAG</BuyBtn>
        </div>

        <div className="col-xs-12 col-md-12 col-lg-6">
          <SecondaryBtn>FIND IN STORE</SecondaryBtn>
        </div>
      </div>

      <TextBtn type="button">NEED SIZE HELP?</TextBtn>
    </Actions>

    <Details>
      <SubHeader>Free Next Day Delivery</SubHeader>
      <Text>Order before 7pm Monday to Thursday for delivery the next day</Text>
    </Details>
  </Wrapper>
);

Info.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  colours: PropTypes.node.isRequired,
  activeColourIndex: PropTypes.number.isRequired,
  selectColour: PropTypes.func.isRequired,
  sizes: PropTypes.node.isRequired,
};

export default Info;
