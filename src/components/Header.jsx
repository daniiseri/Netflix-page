import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

import './Header.css';
import Logo from '../assets/img/Logo.png';

export default function Header() {
  return (
    <header>
      <nav className='Menu'>
        <Link to='/'>
          <img className='Logo' src={Logo} alt='HelpTechFlix logo'/>
        </Link>
        <Button as={Link} to='/register/video' className='ButtonLink'>Novo vídeo</Button>
      </nav>
    </header>
  )
}