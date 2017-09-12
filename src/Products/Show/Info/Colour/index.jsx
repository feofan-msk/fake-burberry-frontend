import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from './Btn';

const BtnContainer = styled.div`
  display: flex;
  padding-bottom: 2rem;
  border-bottom: solid 1px #c6c6c6;
  margin-bottom: 2rem;
  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
    border: none;
    padding-bottom: 1.5rem;
  }
`;
const CurrColor = styled.p`
  margin: 0;
  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
  margin-bottom: 1rem;
`;

class Colour extends Component {
  constructor(props) {
    super(props);
    this.state = { activeColourIndex: 0 };
  }

  selectColour = (newColourIndex) => {
    this.setState({ activeColourIndex: newColourIndex });
  };

  render() {
    return (
      <div>
        {this.props.colours && (
          <CurrColor>
            Colour: <strong>{this.props.colours[this.state.activeColourIndex].value}</strong>
          </CurrColor>
        )}

        <BtnContainer>
          {this.props.colours &&
            this.props.colours.map((colour, index) => (
              <Button
                key={colour.value}
                label={colour.value}
                value={colour.src}
                colourIndex={index}
                onClick={this.selectColour}
                isActive={colour === this.props.colours[this.state.activeColourIndex]}
              />
            ))}
        </BtnContainer>
      </div>
    );
  }
}

Colour.propTypes = {
  colours: PropTypes.node.isRequired,
};

export default Colour;
