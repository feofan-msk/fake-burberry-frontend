import React from 'react'
import styled from 'styled-components'

const ActionBtn = styled.button`
  height: 3rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 1rem 0;

  border-radius: 2px;
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1;
  color: ${props => (props.black ? '#fff' : '#171717')};
  background-color: ${props => (props.black ? '#171717' : '#fff')};
  border: solid 1px ${props => (props.black ? '#171717' : '#999')};
`

export default ActionBtn