import React, { Component } from 'react';
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

class ButtonSelect extends Component {
  state = {
    selectedValue: 0,
  };

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.selectedIndex });
  };

  render() {
    return (
      <Button>
        <Title>{this.props.options[this.state.selectedValue]}</Title>
        <Select onChange={this.handleChange}>
          {this.props.options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Select>
      </Button>
    );
  }
}

ButtonSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonSelect;
