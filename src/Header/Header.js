import logo from '../assets/logo.svg';
import React from 'react';

export default () => {
  return (
    <header className="header">
      <a className="header__link" href="#">
        <img src={logo} className="header__logo" alt="Burberry-logo" />
      </a>
    </header>
  );
};