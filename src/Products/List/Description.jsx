/* eslint no-unused-vars: [0] */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShowBtn from './ShowBtn';

const Background = styled.section`background-color: #f3f3f3;`;
const Heading = styled.h1`
  font-family: Lora;
  font-weight: 400;
  line-height: 2rem;
  font-size: 1.625rem;
  color: #171717;

  padding: 2rem 0 1rem;
  margin: 0;
  @media screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;
const DescriptionText = styled.p`
  display: block;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #171717;

  padding: 0 0.5rem 0.5rem 0;
  margin: 0;

  @media screen and (min-width: 48rem) {
    padding-bottom: 1rem;
  }
`;
const Link = styled(RouteLink)`
  border-bottom: 1px solid #171717;
  text-decoration: none;
  color: #171717;
`;
const ExpandButton = styled.button`
  padding: 0;
  border: none;
  border-bottom: 1px solid #171717;
  cursor: pointer;

  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 500;
  color: #171717;
  background-color: inherit;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
`;
const Wrapper = styled.div`display: flex;`;
const maxLength = 183;

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilterOpened: false,
      isDescriptionHidden: true,
      expandButtonText: 'More',
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleOutsideFilterClick = this.handleOutsideFilterClick.bind(this);
  }

  handleFilterClick() {
    this.setState(prevState => ({
      isFilterOpened: !prevState.isFilterOpened,
    }));
  }

  handleOutsideFilterClick() {
    this.setState({ isFilterOpened: false });
  }

  handleExpandButtonClick = () => {
    this.setState(prevState => ({ isDescriptionHidden: !prevState.isDescriptionHidden }));
    this.setState({ expandButtonText: this.state.isDescriptionHidden ? 'Less' : 'More' });
  };

  render() {
    const hideText = (str) => {
      if (str && str.length > maxLength && this.state.isDescriptionHidden) {
        return `${str.slice(0, maxLength)}... `;
      }
      return str;
    };

    return (
      <Background>
        <div className="container">
          <Heading>{this.props.title}</Heading>

          <div className="row">
            <div className="col-xs-12 col-md-9 col-lg-7">
              <DescriptionText>
                {hideText(this.props.description)}{' '}
                <ExpandButton onClick={this.handleExpandButtonClick}>
                  {this.state.expandButtonText}
                </ExpandButton>
              </DescriptionText>
            </div>
          </div>

          <BtnContainer>
            <Wrapper>
              {['Category', 'Colour', 'Size'].map(filter => (
                <ShowBtn
                  title={filter}
                  handleFilterClick={this.handleFilterClick}
                  isFilterOpened={this.state.isFilterOpened}
                  handleOutsideFilterClick={this.handleOutsideFilterClick}
                >
                  Content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content
                </ShowBtn>
              ))}
            </Wrapper>

            <ShowBtn
              title="Sort by price"
              rightSideAlign
              handleFilterClick={this.handleFilterClick}
              isFilterOpened={this.state.isFilterOpened}
              handleOutsideFilterClick={this.handleOutsideFilterClick}
            >
              high or<br />
              low<br />
              it’s medium length of<br />
              content
            </ShowBtn>
          </BtnContainer>
        </div>
      </Background>
    );
  }
}

Description.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Description;
