import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import arrowIcon from '../assets/arrow.svg';

const SubNavigationStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translate3d(274px, 0, 0);
  transition: 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  background: #fff;

  transform: ${props => (props.isOpened ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)')};
`;

const BackButton = styled.button`
  position: relative;
  flex-basis: 100%;
  padding: 0.9375rem 0.5rem;
  padding-left: 1.375rem;
  font-family: Raleway, sans-serif;
  font-size: 0.875rem;
  text-align: left;
  color: #171717;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 1.1875rem;
    left: 0.3125rem;
    display: block;
    width: 0.75rem;
    height: 0.375rem;
    background: url(${arrowIcon}) no-repeat;
    background-size: contain;
    transform: rotate(90deg);
    content: '';
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 169px;
  background: url(${props => props.image});
    no-repeat;
  background-position: left center;
  background-size: cover;
`;

const Title = styled.h2`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 1rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.7);
  font-family: Lora, serif;
  font-size: 1.25rem;
  line-height: 1;
  color: #171717;
`;

const Links = styled.div`padding: 1rem 0.5rem;`;

const Link = styled(NavLink)`
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: Raleway;
  line-heigth: 1rem;
  color: #171717;
  text-decoration: none;
  &.active {
    font-size: 0.875rem;
    font-weight: 700;
    font-family: Raleway;
    line-height: 1rem;
  }
`;

const SubNavigation = props => (
  <SubNavigationStyled isOpened={props.isOpened}>
    <BackButton type="button" onClick={props.close}>
      Home
    </BackButton>
    <Header image={props.sections.image}>
      <Title>{props.sections.title}</Title>
    </Header>
    <Links>
      {props.sections.links.map(link => (
        <Link to={link.url} onClick={props.toggleSideNav}>
          {link.title}
        </Link>
      ))}
    </Links>
  </SubNavigationStyled>
);

SubNavigation.propTypes = {
  sections: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
  isOpened: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  toggleSideNav: PropTypes.func.isRequired,
};

export default SubNavigation;
