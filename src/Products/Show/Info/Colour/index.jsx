import React from 'react';
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

const Colour = (props, { selectColour = props.selectColour }) => (
  <div>
    {props.colours && (
      <CurrColor>
        Colour: <strong>{props.colours[props.activeColourIndex].value}</strong>
      </CurrColor>
    )}

    <BtnContainer>
      {props.colours &&
        props.colours.map((colour, index) => (
          <Button
            key={colour.value}
            label={colour.value}
            value={colour.src}
            colourIndex={index}
            onClick={selectColour}
            isActive={colour === props.colours[props.activeColourIndex]}
          />
        ))}
    </BtnContainer>
  </div>
);

Colour.propTypes = {
  colours: PropTypes.node.isRequired,
  selectColour: PropTypes.func.isRequired,
  activeColourIndex: PropTypes.number.isRequired,
};

export default Colour;
