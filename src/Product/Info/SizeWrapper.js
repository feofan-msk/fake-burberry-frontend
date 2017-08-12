import React from "react";
import styled from "styled-components";

const SizeWrapper = styled.div`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const SizeName = styled.div`
  margin: 0;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 400;
  color: #171717;
`;

const SizeCurrent = styled.span`font-weight: bold;`;

const SizeHelpBtn = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;

  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

const BtnWrapper = styled.div`display: flex;`;

const Btn = styled.button`
  display: block;
  width: ${props => (props.active ? "2.94rem" : "2.6875rem")};
  height: 2rem;
  margin-right: 0.5rem;
  padding: 0.5rem;

  border: solid 1px #171717;
  border-radius: 2px;
  background-color: transparent;

  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: ${props => (props.active ? "600" : "400")};
`;

export default () => {
  return (
    <SizeWrapper>
      <Header>
        <SizeName>
          Size:
          <SizeCurrent> XL</SizeCurrent>
        </SizeName>

        <SizeHelpBtn type="button">NEED SIZE HELP?</SizeHelpBtn>
      </Header>

      <BtnWrapper>
        <Btn type="button">S</Btn>
        <Btn type="button">M</Btn>
        <Btn type="button">L</Btn>
        <Btn active type="button">
          XL
        </Btn>
      </BtnWrapper>
    </SizeWrapper>
  );
};
