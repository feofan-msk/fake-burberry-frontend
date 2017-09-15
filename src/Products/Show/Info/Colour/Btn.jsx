import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
  margin-right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: 0;
  border: ${props => (props.isActive ? 'solid 1px #232122' : 'none')};
  outline: ${props => props.isActive && 'none'};
  background-image: url(${props => props.color});
  cursor: pointer;
`;

class Button extends Component {
  handleClick = () => {
    this.props.onClick(this.props.colourIndex);
  };

  render() {
    return (
      <Btn
        color={this.props.value}
        isActive={this.props.isActive}
        onClick={this.handleClick}
        type="button"
      >
        Change colour to {this.props.label}
      </Btn>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  colourIndex: PropTypes.number.isRequired,
};

Button.defaultProps = {
  isActive: false,
};

export default Button;
