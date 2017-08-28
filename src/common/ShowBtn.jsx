import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../assets/arrow.svg';

const Wrapper = styled.div`
  margin-right: 1rem;
  position: relative;

  @media screen and (min-width: 48rem) {
    margin-right: 3rem;
  }
`;
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

  ::after {
    content: '';
    background: url(${arrow});
    background-size: 12px 6px;
    background-repeat: no-repeat;
    background-position: center right;
    padding-left: 1.25rem;
    transform: rotate(180deg);
    ${props =>
    props.active &&
      css`
        transform: rotate(180deg);
      `};
  }
`;
const Content = styled.div`
  position: absolute;
  padding: 1rem 1.5rem 1.5rem;
  left: -1.5rem;

  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #000000;
  white-space: nowrap;

  background-color: #f3f3f3;
`;

class ShowBtn extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  state = {
    active: false,
  };

  toggle() {
    this.setState(state => ({
      active: !state.active,
    }));
  }

  render() {
    return (
      <Wrapper>
        <Btn isOpened={this.state.active} onClick={this.toggle}>
          {this.props.title}
        </Btn>
        {this.state.active &&
          <Content>
            {this.props.children}
          </Content>}
      </Wrapper>
    );
  }
}

ShowBtn.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ShowBtn;
