import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Btn';

const colours = [
  {
    id: 1,
    name: 'black',
    code: '#000',
  },
  {
    id: 2,
    name: 'honey',
    code: '#cfa880',
  },
];

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
  state = {
    activeColourIndex: 0,
  };

  selectColour = (newColourIndex) => {
    this.setState({ activeColourIndex: newColourIndex });
  };

  render() {
    return (
      <div>
        <CurrColor>
          Colour: <strong>Honey</strong>
        </CurrColor>

        <BtnContainer>
          {colours.map((colour, idx) => (
            <Button
              key={colour.name}
              label={colour.name}
              value={colour.code}
              colourIndex={idx}
              onClick={this.selectColour}
              isActive={colour === colours[this.state.activeColourIndex]}
            />
          ))}
        </BtnContainer>
      </div>
    );
  }
}

export default Colour;
