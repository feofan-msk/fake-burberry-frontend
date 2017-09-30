import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import selectColour from '../../../actions/selectColour';

const Btn = styled.button`
  margin: 0 1rem 1rem 0;
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
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.selectColour(this.props.colourIndex);
  }

  render() {
    return (
      <Btn
        type="button"
        color={this.props.value}
        isActive={this.props.isActive}
        onClick={this.handleClick}
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
  colourIndex: PropTypes.number.isRequired,
  selectColour: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  selectColour: colourIndex => dispatch(selectColour(colourIndex)),
});

export default connect(null, mapDispatchToProps)(Button);
