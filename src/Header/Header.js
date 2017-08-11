import logo from "../assets/logo.svg";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  font-size: 0;
  text-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid #c6c6c6;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem;
  }
`;

export default () => {
  return (
    <Header>
      <a href="#">
        <img src={logo} alt="Burberry-logo" />
      </a>
    </Header>
  );
};
