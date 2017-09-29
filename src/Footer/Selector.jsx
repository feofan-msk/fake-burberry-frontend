import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 0.9375rem;
  position: relative;
  display: flex;
  @media screen and (min-width: 48rem) {
    display: inline-block;
    margin-top: 1.25rem;
    margin-right: 1.5rem;
  }

  @media screen and (min-width: 62rem) {
    margin-top: 2.25rem;
    margin-right: 1.625rem;
  }
`;

const Button = styled.button`
  z-index: 0;
  margin: 0;
  padding: 0;
  line-height: 1rem;
  font-size: 0.75rem;
  font-family: Raleway;
  background: transparent;
  border: none;
  color: #999;
`;

const DarkText = styled.span`color: #171717;`;

const Select = styled.select`
  font-family: Raleway;
  font-size: 0.75rem;
  opacity: 0;
  border: none;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
`;

const Indent = Button.extend`visibility: hidden;`;

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <Wrapper>
        <Button isOpened={this.state.isOpened}>
          {this.props.text} <DarkText>{this.props.currentOption}</DarkText>
        </Button>

        <Dropdown>
          <Indent>{this.props.text}</Indent>
          <Select onChange={this.props.handleSelect} onClick={this.handleClick}>
            {this.props.options.map(option => <option>{option}</option>)}
          </Select>
        </Dropdown>
      </Wrapper>
    );
  }
}

Selector.propTypes = {
  text: PropTypes.string.isRequired,
  currentOption: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Selector;
