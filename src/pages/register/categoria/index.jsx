import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Field from '../../../components/Field';
import Default from '../../../components/PageDefault';

export default function RegisterCategory() {
  const initValues = {
    name: '',
    description: '',
    color: '#000',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initValues);

  console.log(categories);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(()=>{
    setTimeout(() => {
      const URL = window.location.hostname.includes('localhost') 
       ? 'http://localhost:3000/categories/'
       : 'https://helptechflix-server.herokuapp.com/categories/';

      fetch(URL).then(res => res.json()).then(data => setCategories([...data]));

      setCategories(
        [
          {
            "id": 1,
            "name": "Front End",
            "description": "Client Side",
            "color": "#cbd1ff"
          },
          {
            "id": 2,
            "name": "Back End",
            "description": "Server Side",
            "color": "#cbd1ff"
          }
        ]
      )
    }, 4 * 1000)
  }, [values.name])

  return (
    <Default>
      <h1>
        Cadastro categoria
        {' '}
        {values.name}
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCategories((prev) => [...prev, values]);
          setValues(initValues);
        }}
      >

        <Field
          label="Nome da categoria"
          value={values.name}
          type="text"
          name="name"
          onChange={handleChange}
        />

        <Field
          label='Descrição'
          value={values.description}
          type='textarea'
          name="description"
          onChange={handleChange}
        />

        <Field
          label="Cor"
          value={values.color}
          type="color"
          name="color"
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      { 
        categories.length === 0 &&
        <div>
          Loading...
        </div>
      }

      <Link to="/">Ir para home</Link>
      <Link to="/register/video">Cadastrar video</Link>

    </Default>
  );
}
