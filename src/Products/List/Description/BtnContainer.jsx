import React from 'react';
import styled from 'styled-components';

import Btn from '../../../common/ShowBtn';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow-x: auto;
  @media screen and (min-width: 48rem) {
    overflow-x: visible;
  }
`;
const LeftBtnContainer = styled.div`display: flex;`;
const StyledButton = styled(Btn)`
  margin-right: 0;
`;
export default () =>
  (<BtnContainer>
    <LeftBtnContainer>
      <Btn title="Category">
        Content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content
      </Btn>
      <Btn title="Colour">
        Content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content
      </Btn>
      <Btn title="Size">
        Content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content
      </Btn>
    </LeftBtnContainer>
    <StyledButton title="Sort by price">
      high or<br />low<br />it’s medium length of<br />content
    </StyledButton>
  </BtnContainer>);
