import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrowIcon from '../assets/arrow.svg';

const LocationSelectorStyled = styled.div`
  display: none;
  @media screen and (min-width: 48rem) {
    position: relative;
    display: flex;
    align-items: baseline;
  }
`;

const Button = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  width: 100%;
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #999;

  :: after {
    display: inline-block;
    width: 12px;
    height: 16px;
    margin-left: 0.6875rem;
    background: url(${arrowIcon}) no-repeat;
    background-size: contain;
    background-position: 0 9px;
    content: '';
  }
`;

const Select = styled.select`
  font-family: Raleway;
  font-size: 0.75rem;
  opacity: 0;
  cursor: pointer;
`;

class LocationSelector extends Component {
  state = {
    selectedLocation: 0,
  };

  handleSelectChange = (event) => {
    this.setState({ selectedLocation: event.target.selectedIndex });
  };

  render() {
    return (
      <LocationSelectorStyled>
        <Button>Shopping in: {this.props.locations[this.state.selectedLocation]}</Button>
        <Select onChange={this.handleSelectChange}>
          {this.props.locations.map(location => <option>Shopping in: {location}</option>)}
        </Select>
      </LocationSelectorStyled>
    );
  }
}

LocationSelector.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LocationSelector;
