import React from 'react';
import Button from './Button';

import './Header.css';
import Logo from '../assets/img/Logo.png'

export default function Header() {
  return (
    <header>
      <nav className='Menu'>
        <a href='/'>
          <img className='Logo' src={Logo} alt='HelpTechFlix logo'/>
        </a>
        <Button className='ButtonLink'>Novo vídeo</Button>
      </nav>
    </header>
  )
}