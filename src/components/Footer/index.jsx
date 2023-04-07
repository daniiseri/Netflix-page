import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img style={{
          scale: '.25',
          maxWidth: '100%'
        }}
          src={Logo} alt="Logo HelpTechFlix" 
        />
      </Link>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px'
      }}>
        <Link to='https://github.com/daniiseri' target='_blank'><AiFillGithub/></Link>
        <Link to='https://www.linkedin.com/in/daniel-de-souza-iseri-12b558230/' target='_blank'><AiFillLinkedin/></Link>
      </div>
    </FooterBase>
  );
}

export default Footer;
