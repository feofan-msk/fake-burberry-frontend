import React from 'react'
import styled from 'styled-components'

const SizeHelpBtn = styled.button`
  display: block;
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
  background-color: #fff;
  border: none;

  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
`

export default () => {
  return (
    <SizeHelpBtn type="button">
      NEED SIZE HELP?
    </SizeHelpBtn>
  );
};