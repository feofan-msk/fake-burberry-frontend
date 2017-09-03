import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../assets/arrow.svg';

const Wrapper = styled.div`position: relative;`;
const Btn = styled.button`
  position: relative;  
  padding: 1.5rem 0;
  margin-right: 1rem;

  border: none;
  background-color: transparent;
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;

  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: ${props => (props.isActive ? '0.5' : '1')};

  ::after {
    content: '';
    background-image: url(${arrow});
    margin-left: 0.5rem;
    background-size: contain;
    width: 0.75rem;
    height: 0.375rem;
    transform: ${props => (props.isOpened ? 'rotate(180deg)' : 'none')};
  }
  
  @media screen and (min-width: 48rem) {
    margin-right: ${props => (props.rightSideAlign ? '0' : '3rem')};
  }
  }
`;
const Content = styled.div`
  z-index: 9999;
  position: absolute;
  padding: 1rem 1.5rem 1.5rem;
  left: -1.5rem;
  right: auto;
  ${props =>
    props.rightSideAlign &&
    css`
      left: auto;
      right: -1.5rem;
    `};

  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #000000;
  white-space: nowrap;

  background-color: #f3f3f3;
`;

class ShowBtn extends Component {
  state = {
    isOpened: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  handleOutsideClick = (e) => {
    if (this.node && !this.node.contains(e.target)) {
      this.toggle(false);
    }
  };

  toggle = (on = true) => {
    if (on !== this.state.isOpened || on) {
      this.setState(
        prevState => ({ isOpened: !prevState.isOpened }),
        () => this.props.onToggle(this.state.isOpened),
      );
    }
  };

  render() {
    return (
      <Wrapper>
        <div
          ref={(node) => {
            this.node = node;
          }}
        >
          <Btn
            rightSideAlign={this.props.rightSideAlign}
            isOpened={this.state.isOpened}
            isActive={this.props.isActive}
            onClick={this.toggle}
          >
            {this.props.title}
          </Btn>
          {this.state.isOpened && (
            <Content rightSideAlign={this.props.rightSideAlign}>{this.props.children}</Content>
          )}
        </div>
      </Wrapper>
    );
  }
}

ShowBtn.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  rightSideAlign: PropTypes.bool,
};

ShowBtn.defaultProps = {
  rightSideAlign: false,
  isActive: true,
};

export default ShowBtn;
