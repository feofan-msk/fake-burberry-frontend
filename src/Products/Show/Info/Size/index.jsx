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
