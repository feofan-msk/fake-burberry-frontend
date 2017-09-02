import React, { Component } from 'react';
import styled from 'styled-components';

import Selector from './Selector';

const availableSizes = ['S', 'M', 'L', 'XL'];

const SizeWrapper = styled.div`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
  }
`;
const SelectPanel = styled.div`display: flex;`;
const Header = styled.div`
  display: flex;

  justify-content: space-between;
  margin-bottom: 1rem;
`;
const SizeCurrent = styled.div`
  margin: 0;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 0.875rem;
  font-weight: 400;
  color: #171717;
`;
const TextBtn = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;

  font-family: Raleway;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

class Size extends Component {
  state = {
    selectedSizeIndex: 3,
  };

  handleClick = (newSize) => {
    const newSizeIndex = availableSizes.indexOf(newSize);
    if (newSizeIndex > -1) {
      this.setState({ selectedSizeIndex: newSizeIndex });
    }
  };

  render() {
    return (
      <SizeWrapper>
        <Header>
          <SizeCurrent>
            Size:
            <strong>{availableSizes[this.state.selectedSizeIndex]}</strong>
          </SizeCurrent>

          <TextBtn>NEED SIZE HELP?</TextBtn>
        </Header>

        <SelectPanel>
          {availableSizes.map(size => (
            <Selector
              key={size}
              onClick={this.handleClick}
              name={size}
              isActive={size === availableSizes[this.state.selectedSizeIndex]}
            />
          ))}
        </SelectPanel>
      </SizeWrapper>
    );
  }
}

export default Size;
