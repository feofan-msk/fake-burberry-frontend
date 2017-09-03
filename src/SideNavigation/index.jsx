import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import ButtonSelect from './ButtonSelect';
import SubNavigation from './SubNavigation';
import { sections, languages, locations } from '../data';
import logo from '../assets/logo.svg';
import arrow from '../assets/arrow.svg';

const Menu = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 274px;
  overflow-y: scroll;
  transform: ${props => (props.isOpened ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)')};

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;
const Logo = styled.img`
  display: block;
  height: 0.75rem;
  margin: 1rem auto;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;
const SectionButton = styled.button`
  display: block;
  padding: 0.75rem 0.5rem;

  font-family: Raleway;
  font-size: 0.875rem;
  text-align: left;
  color: #171717;

  text-decoration: none;
  border: none;
  background: transparent;

  ::after {
    position: absolute;
    right: 3px;
    width: 12px;
    height: 16px;
    content: '';
    transform: rotate(-90deg);
    background: url(${arrow}) no-repeat;
    background-size: contain;
    background-position: 0 3px;
  }
`;
const Title = styled.h3`
  margin: 0;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
  padding-bottom: 0.4rem;
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
`;
const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 0.75rem 0.5rem;
  font-family: Raleway;
  font-size: 0.875rem;
  color: #171717;
`;
const ButtonContainer = Block.extend`padding-top: 0.25rem;`;
const MainNavigation = styled.div`
  transition: 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  ${props => props.isShiftedLeft && css`transform: translate3d(-100%, 0, 0);`};
`;

class SideMenu extends Component {
  state = {
    isSubNavOpened: false,
    subNavActiveSection: 0,
  };

  toggleSubNav = subSectionIndex =>
    this.setState(prevState => ({
      isSubNavOpened: !prevState.isSubNavOpened,
      subNavActiveSection: subSectionIndex,
    }));

  closeSubNav = () => this.setState({ isSubNavOpened: false });

  render() {
    return (
      <Menu isOpened={this.props.isOpened}>
        <MainNavigation isShiftedLeft={this.state.isSubNavOpened}>
          <Logo alt="Logo" src={logo} />

          <Block>
            {sections.map((name, index) => (
              <SectionButton onClick={() => this.toggleSubNav(index)} key={name.title}>
                {name.title}
              </SectionButton>
            ))}
          </Block>

          <Block>
            <Title>Customer service</Title>
            <nav>
              <Link to="/contact">Contact Us</Link>
              <Link to="/payment">Payment</Link>
              <Link to="/shipping">Shipping</Link>
              <Link to="/returns">Returns</Link>
              <Link to="/faqs">Faqs</Link>
              <Link to="/the-burberry-app">The Burberry App</Link>
              <Link to="/locator">Store Locator</Link>
            </nav>
          </Block>

          <Block>
            <Title>Our company</Title>
            <nav>
              <Link to="/our-history">Our History</Link>
              <Link to="/burberry-group-pic">Burberry Group Pic</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/corporate-responsibility">Corporate Responsibility</Link>
              <Link to="/site-map">Site Map</Link>
            </nav>
          </Block>

          <ButtonContainer>
            <ButtonSelect options={locations} />
            <ButtonSelect options={languages} />
          </ButtonContainer>
        </MainNavigation>

        <SubNavigation
          sections={sections[this.state.subNavActiveSection]}
          isOpened={this.state.isSubNavOpened}
          close={this.closeSubNav}
          toggleSideNav={this.props.toggle}
        />
      </Menu>
    );
  }
}

SideMenu.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default SideMenu;
