import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import Help from './Help';
import Selector from './Selector';
import { locations, languages } from '../data';
import selectLocation from '../actions/selectLocation';
import selectLanguage from '../actions/selectLanguage';

const Wrapper = styled.footer`
  padding: 2rem 0;
  margin-top: 3rem;
  background-color: #f3f3f3;

  @media screen and (min-width: 62rem) {
    padding-top: 4rem;
  }
`;

class Footer extends Component {
  handleSelectLocation = (event) => {
    this.props.selectLocation(locations[event.target.selectedIndex]);
  };

  handleSelectLanguage = (event) => {
    this.props.selectLanguage(languages[event.target.selectedIndex]);
  };

  render() {
    return (
      <Wrapper>
        <div className="container">
          <Navigation />

          <Selector
            currentOption={this.props.currentLocation}
            options={locations}
            handleSelect={this.handleSelectLocation}
            text="Shipping country: "
          />
          <Selector
            currentOption={this.props.currentLanguage}
            options={languages}
            handleSelect={this.handleSelectLanguage}
            text="Language: "
          />

          <Help />
        </div>
      </Wrapper>
    );
  }
}

Footer.propTypes = {
  currentLocation: PropTypes.string.isRequired,
  currentLanguage: PropTypes.string.isRequired,
  selectLocation: PropTypes.func.isRequired,
  selectLanguage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentLocation: state.uiParams.location,
  currentLanguage: state.uiParams.language,
});

const mapDispatchToProps = dispatch => ({
  selectLocation: location => dispatch(selectLocation(location)),
  selectLanguage: language => dispatch(selectLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
