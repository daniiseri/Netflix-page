import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Field from '../../../components/Field';
import Default from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import categoriesRepositories from '../../../repositories/categories';

export default function RegisterCategory() {
  const initValues = {
    title: '',
    description: '',
    color: '#000000',
  };

  const [categories, setCategories] = useState([]);
  const { handleChange, values, clearForm } = useForm(initValues);

  useEffect(()=>{
    categoriesRepositories.getAllCategoriesWithVideos().then((data) => {
      setCategories(data);
    });

    }, [values.title])

  return (
    <Default>
      <h1>
        Cadastro categoria
        {' '}
        {values.title}
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(!categories.find(({title}) => title === values.title)){
            categoriesRepositories.create(values);
            alert('Cadastrou com sucesso!');
            setCategories((prev)=>[...prev, values]);
            clearForm();
          }
          else{
            alert('Essa categoria já existe!');
          }
        }}
      >

        <Field
          label="Nome da categoria"
          value={values.title}
          type="text"
          name="title"
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

      <br/>
      
      <Link to="/">Ir para home</Link>
      
    </Default>
  );
}
