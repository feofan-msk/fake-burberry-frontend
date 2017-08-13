import React from "react";
import styled from "styled-components";
import triangleIcon from "../assets/triangle.svg";

const SectionBtn = styled.button`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;

  ::after {
    content: url(${triangleIcon});
    position: absolute;
    right: 0;
    ${props => (props.active ? "transform: rotate(180deg);" : "")};
  }
  @media screen and (min-width: 48rem) {
    ::after {
      display: none;
    }
  }
`;
const Title = styled.h2`
  margin: 0;
  font-family: Raleway;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;
  color: #171717;
`;

export default function(props) {
  return (
    <SectionBtn active={props.active} type="button">
      <Title>
        {props.children}
      </Title>
    </SectionBtn>
  );
}
