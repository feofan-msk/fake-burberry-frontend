import React, { Component } from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Btn from '../../common/ShowBtn';

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
const Content = styled.p`
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
const MoreButton = styled.button`
  padding: 0;
  border: none;
  border-bottom: 1px solid #171717;

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
  overflow-x: auto;
  @media screen and (min-width: 48rem) {
    overflow-x: visible;
  }
`;
const Wrapper = styled.div`display: flex;`;

class Description extends Component {
  state = {
    activeFilter: undefined,
  };

  handleFilterToggle = (filterName, toggledOn) => {
    if (toggledOn) {
      this.setState({ activeFilter: filterName });
    } else {
      this.setState({ activeFilter: undefined });
    }
    this.props.onToggle(toggledOn);
  };

  render() {
    return (
      <Background>
        <div className="container">
          <Heading>Men’s Clothing</Heading>

          <div className="row">
            <div className="col-xs-12 col-md-9 col-lg-7">
              <Content>
                Explore our menswear collection for the season. Sculptural knitwear,{' '}
                <Link to="/">sweatshirts</Link>, artist overalls and oversized cabans feature
                alongside our signature trench coat in both heritage and seasonal...{' '}
                <MoreButton>More</MoreButton>
              </Content>
            </div>
          </div>

          <BtnContainer>
            <Wrapper>
              {['Category', 'Colour', 'Size'].map(filterName => (
                <Btn
                  title={filterName}
                  onToggle={toggledOn => this.handleFilterToggle(filterName, toggledOn)}
                  isActive={
                    this.state.activeFilter !== undefined && this.state.activeFilter !== filterName
                  }
                >
                  Content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content<br />
                  content content content content content content content
                </Btn>
              ))}
            </Wrapper>

            <Btn
              title="Sort by price"
              rightSideAlign
              onToggle={toggledOn => this.handleFilterToggle('Sort by price', toggledOn)}
              isActive={
                this.state.activeFilter !== undefined && this.state.activeFilter !== 'Sort by price'
              }
            >
              high or<br />
              low<br />
              it’s medium length of<br />
              content
            </Btn>
          </BtnContainer>
        </div>
      </Background>
    );
  }
}

Description.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Description;
