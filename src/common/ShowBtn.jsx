import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../assets/arrow.svg';

const Wrapper = styled.div`position: relative;`;
const Btn = styled.button`
  padding: 1.5rem 0;
  position: relative;

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
  opacity: ${props => (props.currentState && props.active ? '0.5' : '1')};
  opacity: ${props => (!props.currentState && props.active ? '0.5' : '1')};

  ::after {
    content: '';
    background-image: url(${arrow});
    margin-left: 0.5rem;
    background-size: contain;
    width: 0.75rem;
    height: 0.375rem;
    transform: ${props => (props.currentState ? 'rotate(180deg)' : 'none')};
  }
  
    @media screen and (min-width: 48rem) {
      margin-right: ${props => (props.align === 'right' ? 0 : '3rem')};
      margin-left: ${props => (props.align === 'right' ? 'auto' : 0)};
    }
  }
`;
const Content = styled.div`
  z-index: 9999;
  position: absolute;
  padding: 1rem 1.5rem 1.5rem;

  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #000000;
  white-space: nowrap;

  background-color: #f3f3f3;

  margin-left: ${props => (props.align === 'left' ? 0 : '-1.5rem')};
  right: ${props => (props.align === 'right' ? 0 : 'auto')};

  ${props =>
    props.align === 'right' &&
    `
      margin-right: 0;
      margin-left: auto;
  `};
`;

class ShowBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  handleOutsideClick(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.handleClick(false);
    }
  }

  handleClick(on = true) {
    if (on === false && on === this.state.isActive) return;
    this.props.childClick(this.state.isActive);
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <Wrapper>
        <div
          ref={(node) => {
            this.node = node;
          }}
        >
          <Btn
            onClick={this.handleClick}
            currentState={this.state.isActive}
            align={this.props.align}
            active={this.props.active}
          >
            {this.props.title}
          </Btn>
          {this.state.isActive && <Content align={this.props.align}>{this.props.children}</Content>}
        </div>
      </Wrapper>
    );
  }
}

ShowBtn.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  childClick: PropTypes.func.isRequired,
};

export default ShowBtn;
