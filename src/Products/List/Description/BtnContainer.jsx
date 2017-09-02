import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Btn from '../../../common/ShowBtn';

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow-x: auto;
  @media screen and (min-width: 48rem) {
    overflow-x: visible;
  }
`;
const Wrapper = styled.div`display: flex;`;

class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(data) {
    const active = data === true;
    this.props.stateUpdate(this.state.isActive);
    this.setState({
      isActive: !active,
    });
  }

  render() {
    return (
      <BtnContainer>
        <Wrapper>
          <Btn title="Category" childClick={this.handleClick} active={this.state.isActive}>
            Content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content
          </Btn>
          <Btn title="Colour" childClick={this.handleClick} active={this.state.isActive}>
            Content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content
          </Btn>
          <Btn title="Size" childClick={this.handleClick} active={this.state.isActive}>
            Content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content<br />
            content content content content content content content
          </Btn>
        </Wrapper>

        <Wrapper>
          <Btn
            title="Sort by price"
            childClick={this.handleClick}
            active={this.state.isActive}
            align="right"
          >
            high or<br />low<br />it’s medium length of<br />content
          </Btn>
        </Wrapper>
      </BtnContainer>
    );
  }
}

FilterPanel.propTypes = {
  stateUpdate: PropTypes.func.isRequired,
};

export default FilterPanel;
