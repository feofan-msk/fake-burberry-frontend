import React, { Component } from 'react'
import styled from 'styled-components'

const ColourButton = styled.button`
  margin-right: 1rem;
  width: 2.5rem;
  height: 2.5rem; 
  border-radius: 50%;
  font-size: 0;
  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
  background-color: ${props => props.color};
`

export default function(props) {
  return (
    <ColourButton color={props.value} active={props.active} type="button">
      Change colour to {props.name}
    </ColourButton>
  );
};