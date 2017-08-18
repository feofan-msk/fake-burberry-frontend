import React from 'react';
import styled from 'styled-components';

import Btn from '../../../common/ShowBtn';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow: scroll;
`;
const Heading = styled(Btn)`
  padding-left: 0.5rem;
  padding-right: 2rem;

  ::after{
    content: none;
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
