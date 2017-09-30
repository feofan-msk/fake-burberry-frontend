import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

import arrow from '../../assets/arrow.svg';

const Wrapper = styled.div`position: relative;`;
const Btn = styled.button`
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
  color: ${props => !props.isOpened && props.isFilterOpened && '#999999'};

  ::after {
    content: '';
    background-image: url(${arrow});
    margin-left: 0.5rem;
    background-size: contain;
    width: 0.75rem;
    height: 0.375rem;
    transition: transform 0.2s ease-out;
    transform: ${props => (props.isOpened ? 'rotate(180deg)' : 'none')};
  }
  
  @media screen and (min-width: 48rem) {
    margin-right: ${props => (props.rightSideAlign ? '0' : '3rem')};
  }
  }

  &:hover {
    color: ${props => !props.isOpened && '#BABABA'};
    transition: color 0.15s linear;
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
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.toggle();
    this.props.handleFilterClick();
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  };

  handleClickOutside() {
    this.setState({ isOpened: false });
    this.props.handleOutsideFilterClick();
  }

  render() {
    return (
      <Wrapper>
        <Btn
          rightSideAlign={this.props.rightSideAlign}
          isOpened={this.state.isOpened}
          onClick={this.handleClick}
          isFilterOpened={this.props.isFilterOpened}
        >
          {this.props.title}
        </Btn>
        {this.state.isOpened && (
          <Content rightSideAlign={this.props.rightSideAlign}>{this.props.children}</Content>
        )}
      </Wrapper>
    );
  }
}

ShowBtn.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  rightSideAlign: PropTypes.bool,
  handleFilterClick: PropTypes.func.isRequired,
  isFilterOpened: PropTypes.bool.isRequired,
  handleOutsideFilterClick: PropTypes.func.isRequired,
};

ShowBtn.defaultProps = {
  rightSideAlign: false,
};

export default onClickOutside(ShowBtn);
