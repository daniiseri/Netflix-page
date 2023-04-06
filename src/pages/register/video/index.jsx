import React from 'react';
import { Link } from 'react-router-dom';
import Default from '../../../components/PageDefault';

export default function RegisterVideo(){
  return (
    <Default> 
      <h1>Cadastro video</h1>
      <Link to='/register/category'>Cadastrar categoria</Link>
    </Default>
  )
}