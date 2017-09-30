import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  position: relative;
  margin: 0 0.5rem 1rem;
  padding: 1rem;

  border: 1px solid #171717;
  border-radius: 2px;
  background-color: transparent;
  cursor: pointer;
`;
const Title = styled.span`
  font-family: 'Raleway';
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  text-align: center;
`;
const Select = styled.select`
  position: absolute;
  padding: 1rem;

  font-size: 0.75em;
  line-height: 1rem;

  background-color: transparent;
  border: none;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ButtonSelect = props => (
  <Button>
    <Title>{props.currentOption}</Title>
    <Select onChange={props.handleSelect}>
      {props.options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </Select>
  </Button>
);

ButtonSelect.propTypes = {
  currentOption: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonSelect;
