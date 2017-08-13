import React from "react";
import styled, { css } from "styled-components";

const ActionBtn = styled.button`
  height: 3rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 1rem 0;

  width: 100%;
  border-radius: 2px;
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1;
  color: ${props => (props.primary ? "#fff" : "#171717")};
  background-color: ${props => (props.primary ? "#171717" : "transparent")};
  border: solid 1px #171717;

  @media screen and (min-width: 62rem) {
    display: ${props => (props.secondary ? "block" : "none")};
  }

  ${props =>
    props.name === "addtobag" &&
    css`
    display: none;

    @media screen and (min-width: 62rem) {
      display: block;
  }
  `};
`;

export default function(props) {
  return (
    <ActionBtn
      primary={props.primary}
      secondary={props.secondary}
      name={props.name}
      type="button"
    >
      {props.children}
    </ActionBtn>
  );
}
