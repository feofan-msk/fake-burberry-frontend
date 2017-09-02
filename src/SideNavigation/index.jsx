import React, { Component } from 'react';
import styled from 'styled-components';

const Menu = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 274px;
  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

class SideMenu extends Component {
  state = {};

  render() {
    return (
      <Menu>
        <h1>HUEC</h1>
      </Menu>
    );
  }
}

export default SideMenu;
