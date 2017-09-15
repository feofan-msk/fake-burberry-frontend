import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Selector from './Selector';

const SizeWrapper = styled.div`
  display: none;
  @media screen and (min-width: 62rem) {
    display: block;
  }
`;
const SelectPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
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
  constructor(props) {
    super(props);
    this.state = { selectedSizeIndex: 0 };
  }

  handleClick = (newSizeIndex) => {
    this.setState({ selectedSizeIndex: newSizeIndex });
  };

  render() {
    return (
      <SizeWrapper>
        <Header>
          {this.props.sizes && (
            <SizeCurrent>
              Size: <strong>{this.props.sizes[this.state.selectedSizeIndex].title}</strong>
            </SizeCurrent>
          )}
          <TextBtn>NEED SIZE HELP?</TextBtn>
        </Header>

        {this.props.sizes && (
          <SelectPanel>
            {this.props.sizes.map((size, index) => (
              <Selector
                key={size.id}
                name={size.title}
                onClick={this.handleClick}
                index={index}
                isActive={this.state.selectedSizeIndex === index}
              />
            ))}
          </SelectPanel>
        )}
      </SizeWrapper>
    );
  }
}

Size.propTypes = {
  sizes: PropTypes.node.isRequired,
};

export default Size;
