import React from "react";
import ColourBtn from "./ColourBtn";
import styled from "styled-components";

const Info = styled.section`
  box-sizing: border-box;
  margin: 1rem 1rem 2rem;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    margin: 0;
    margin-bottom: 2rem;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;
const Price = styled.h2`
  margin: 0;
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.19;
  color: #171717;
`;
const Id = styled.p`
  margin: 0;
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  padding-top: 0.125rem;
`;
const CurrColor = styled.p`
  margin: 0;
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  margin-bottom: 1rem;
`;
const BtnContainer = styled.div`
  display: flex;
  padding-bottom: 2rem;
`;

export default () => {
  return (
    <Info>
      <InfoWrapper>
        <Price>110 000 руб.</Price>
        <Id>Item 39428531</Id>
      </InfoWrapper>

      <CurrColor>Colour: Honey</CurrColor>

      <BtnContainer>
        <ColourBtn name="black" value="#000" />
        <ColourBtn name="honey" value="#cfa880" active />
      </BtnContainer>
    </Info>
  );
};
