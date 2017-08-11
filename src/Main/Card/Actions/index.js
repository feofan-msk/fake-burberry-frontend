import React from "react";
import ActionBtn from "./ActionBtn";
import SizeHelpBtn from "./SizeHelpBtn";
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

export default () => {
  return (
    <Actions>
      <BtnContainer>
        <ActionBtn black type="button">
          FIND IN STORE
        </ActionBtn>
        <ActionBtn type="button">FIND IN STORE</ActionBtn>
      </BtnContainer>

      <SizeHelpBtn />
    </Actions>
  );
};
