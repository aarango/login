import React from 'react';
import '../assets/styles/components/Header.scss';
import logo  from '../assets/static/logo.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='Tributi' />
  </header>
);

export default Header;
