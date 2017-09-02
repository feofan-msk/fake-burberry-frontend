import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: block;
  margin-right: 0.5rem;
  padding: 0.5rem;

  width: ${props => (props.isActive ? '2.9rem' : '2.7rem')};
  height: 2rem;
  border: solid 1px #171717;
  border-radius: 2px;
  background-color: transparent;
  cursor: pointer;

  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: ${props => (props.isActive ? '600' : '400')};
`;

class Selector extends Component {
  handleClick = () => {
    this.props.onClick(this.props.name);
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
};

export default Selector;
