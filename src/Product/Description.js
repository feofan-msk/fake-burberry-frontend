import React from "react";
import styled from "styled-components";
import SectionBtn from "../common/SectionBtn";

const Description = styled.section`
  padding: 2rem 1rem;
  border-bottom: solid 1px #c6c6c6;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
    border: none;
  }
`;
const Content = styled.article`
  margin-top: 2rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-family: Lora;
  font-weight: 400;
  color: #171717;
  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
  }

  p,
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export default () => {
  return (
    <Description>
      <SectionBtn active title="DESCRIPTION" />

      <Content>
        <p>A refined car coat crafted in protective cotton gabardine.</p>
        <p>
          Invented by Thomas Burberry in 1879, cotton gabardine is a tightly
          woven and breathable fabric that protects against wind and rain.
        </p>
        <p>
          Raglan sleeves and a concealed button closure complement the clean
          tailored lines.
        </p>
        <p>The piece is finished with a distinctive check undercollar.</p>
        <br />
        <ul>
          <li>
            Coat length: 98cm/38.6in. This is based on a size UK 48 as
            proportions change slightly according to size.
          </li>
          <li>Outer: 100% cotton</li>
          <li>Check lining: 100% cotton</li>
          <li>Sleeve lining: 100% viscose</li>
          <li>Buttons: buffalo horn</li>
          <li>Specialist dry clean</li>
          <li>Made in Europe</li>
          <li>Item 39428531</li>
        </ul>
      </Content>
    </Description>
  );
};