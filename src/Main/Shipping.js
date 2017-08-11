import React from "react";
import styled from "styled-components";
import SectionBtn from "../common/SectionBtn";

const Shipping = styled.section`
  padding: 2rem 1rem;
  border-bottom: solid 1px #c6c6c6;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () => {
  return (
    <Shipping>
      <SectionBtn title="SHIPPING & RETURNS" />
    </Shipping>
  );
};
