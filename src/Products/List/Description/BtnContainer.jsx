import React from 'react';
import styled from 'styled-components';

import Btn from '../../../common/ShowBtn';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow-x: auto;
`;
const StyledButton = styled(Btn)`
  margin-right: 0;
`;
export default () =>
  (<BtnContainer>
    <div>
      <Btn>Category</Btn>
      <Btn>Colour</Btn>
      <Btn>Size</Btn>
    </div>
    <StyledButton>Sort by price</StyledButton>
  </BtnContainer>);
