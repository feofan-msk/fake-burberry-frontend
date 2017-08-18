import React from 'react';
import styled from 'styled-components';

import Btn from '../../../common/ShowBtn';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow: scroll;

  @media screen and (min-width: 48rem) {
    Button:last-child {
      padding-right: 0;
    }
  }
`;
const Heading = styled(Btn)`
  padding-right: 2rem;

  ::after{
    content: none;
  }
  
  @media screen and (min-width: 48rem){
    display: none;
  }
`;
export default () =>
  (<BtnContainer>
    <div>
      <Heading>Refine by</Heading>
      <span>
        <Btn>Category</Btn>
        <Btn>Colour</Btn>
        <Btn>Size</Btn>
      </span>
    </div>
    <Btn>Sort by price</Btn>
  </BtnContainer>);
