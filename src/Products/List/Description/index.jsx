import React, { Component } from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import BtnContainer from './BtnContainer';

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

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.stateUpdate = this.stateUpdate.bind(this);
  }

  stateUpdate(data) {
    this.props.stateUpdate(this.state.isActive);
    this.setState({
      isActive: !data,
    });
  }

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
          <BtnContainer stateUpdate={this.stateUpdate} />
        </div>
      </Background>
    );
  }
}

Description.propTypes = {
  stateUpdate: PropTypes.func.isRequired,
};

export default Description;
