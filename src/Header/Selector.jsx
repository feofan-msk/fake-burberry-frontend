import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import arrow from '../assets/arrow.svg';
import selectLocation from '../actions/selectLocation';
import { locations } from '../data';

const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 48rem) {
    position: relative;
    display: flex;
    align-items: baseline;
  }
`;

const Button = styled.div`
  z-index: 0;

  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #999;

  display: flex;
  align-items: center;

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
`;

const Select = styled.select`
  font-family: Raleway;
  font-size: 0.75rem;
  opacity: 0;
  cursor: pointer;
  border: none;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
`;

const Indent = styled.span`
  visibility: hidden;
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #999;
`;

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  handleSelect = (event) => {
    this.props.selectLocation(locations[event.target.selectedIndex]);
  };

  render() {
    return (
      <Wrapper>
        <Button isOpened={this.state.isOpened}>Shopping in: {this.props.currentLocation}</Button>

        <Dropdown>
          <Indent>Shopping in: </Indent>
          <Select onChange={this.handleSelect} onClick={this.handleClick}>
            {locations.map(location => <option>{location.country}</option>)}
          </Select>
        </Dropdown>
      </Wrapper>
    );
  }
}

Selector.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  selectLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentLocation: state.uiParams.location.country,
});

const mapDispatchToProps = dispatch => ({
  selectLocation: location => dispatch(selectLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
