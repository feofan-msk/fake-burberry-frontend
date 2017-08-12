import React from "react";
import ActionBtn from "./ActionBtn";
import styled from "styled-components";

const Actions = styled.section`
  padding: 0 1rem 3rem;
  border-bottom: solid 1px #c6c6c6;
  @media screen and (min-width: 48rem) {
    padding: 0;
    border: none;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SizeHelpBtn = styled.button`
  display: block;
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
  background-color: #fff;
  border: none;

  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
`;

export default () => {
  return (
    <Actions>
      <BtnContainer>
        <ActionBtn primary type="button">
          FIND IN STORE
        </ActionBtn>
        <ActionBtn type="button">FIND IN STORE</ActionBtn>
      </BtnContainer>
      <SizeHelpBtn>NEED SIZE HELP?</SizeHelpBtn>
    </Actions>
  );
};
