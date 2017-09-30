import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;

  width: 2.7rem;
  height: 2rem;
  border: solid 1px #171717;
  border-radius: 2px;
  background-color: transparent;
  cursor: pointer;

  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;

  ${props =>
    props.isActive &&
    css`
      width: 2.9rem;
      font-weight: 600;
      border: solid 2px #000;
      outline: none;
    `};
`;

class Selector extends Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      <Button onClick={this.handleClick} isActive={this.props.isActive}>
        {this.props.name}
      </Button>
    );
  }
}

Selector.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default Selector;
