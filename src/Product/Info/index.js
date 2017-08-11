import React from "react";
import ColourBtn from "./ColourBtn";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";
import SizeWrapper from "./SizeWrapper";
import ActionBtn from "./ActionBtn";

const Info = styled.section`
  box-sizing: border-box;
  margin: 1rem 1rem 2rem;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    margin: 0;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 62rem) {
    margin-bottom: 1.5rem;
    border: none;
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
const CurrColor = styled.p`
  margin: 0;
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
  margin-bottom: 1rem;
`;
const Bold = styled.p`
  @media screen and (min-width: 62rem) {
    display: inline;
    font-weight: bold;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  padding-bottom: 2rem;
  @media screen and (min-width: 62rem) {
    padding-bottom: 1.5rem;
  }
`;

const Actions = styled.section`
  padding: 0 1rem 3rem;
  border-bottom: solid 1px #c6c6c6;
  @media screen and (min-width: 48rem) {
    padding: 0;
    border: none;
  }
`;
const SizeHelpBtn = styled.button`
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

  @media (min-width: 62rem) {
    display: block;
    margin-top: 1.5rem;
  }
`;

const Caption = styled.h3`
  margin-bottom: 0.25rem;
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

export default () => {
  return (
    <Info>
      <InfoWrapper>
        <Price>
          <FormattedNumber
            value="110000"
            style="currency"
            currency="RUB"
            minimumFractionDigits="0"
          />
        </Price>
        <Id>Item 39428531</Id>
      </InfoWrapper>

      <div className="row">
        <div className="col-xs-12 col-md-12 col-lg-6">
          <CurrColor>
            Colour: <Bold>Honey</Bold>
          </CurrColor>

          <BtnContainer>
            <ColourBtn label="black" value="#000" />
            <ColourBtn label="honey" value="#cfa880" active />
          </BtnContainer>
        </div>

        <div className="col-xs-12 col-md-12 col-lg-6">
          <SizeWrapper />
        </div>
      </div>

      <Actions>
        <div className="row">
          <div className="col-xs-12 col-md-3 col-lg-6">
            <ActionBtn primary>SELECT A SIZE</ActionBtn>
            <ActionBtn primary desktop>
              ADD TO BAG
            </ActionBtn>
          </div>

          <div className="col-xs-12 col-md-12 col-lg-6">
            <ActionBtn>FIND IN STORE</ActionBtn>
            <ActionBtn desktop>FIND IN STORE</ActionBtn>
          </div>
        </div>

        <SizeHelpBtn>NEED SIZE HELP?</SizeHelpBtn>
      </Actions>

      <Details>
        <Caption>Free Next Day Delivery</Caption>
        <Text>
          Order before 7pm Monday to Thursday for delivery the next day
        </Text>
      </Details>
    </Info>
  );
};
