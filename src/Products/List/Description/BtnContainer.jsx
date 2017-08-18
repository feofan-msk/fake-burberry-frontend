import React from 'react';
import styled from 'styled-components';

import Btn from './Btn';

const BtnContainer = styled.div`
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
    <Heading>Refine by</Heading>
    <Btn>Category</Btn>
    <Btn>Colour</Btn>
    <Btn>Size</Btn>
    <Btn>Sort by price</Btn>
  </BtnContainer>);
