import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Default from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import Field from '../../../components/Field';
import Button from '../../../components/Button';
import videosRepositories from '../../../repositories/videos';
import categoriesRepositories from '../../../repositories/categories';

export default function RegisterVideo(){
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories?.map(({title}) => title);

  const {values, handleChange } = useForm({
    title: '',
    url: '',
    category: 'Front End'
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    categoriesRepositories
      .getAll()
      .then((data) => setCategories(data));

  },[])

  const categorySelected = categories
    ?.find((category)=>category.title === values.category);

  return (
    <Default> 
      <h1>Cadastro video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        videosRepositories.create({
          title: values.title,
          url: values.url,
          categoryId: categorySelected.id
        }).then(() => {
          alert('Cadastrou com sucesso!');
          navigate('/');
        });
        
      }}>
        <Field
          label="Título do vídeo"
          value={values.title}
          type="text"
          name="title"
          onChange={handleChange}
        />

        <Field
          label="URL"
          value={values.url}
          type="text"
          name="url"
          onChange={handleChange}
          required
        />

        <Field
          label="Categoria"
          value={values.category}
          type="text"
          name="category"
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type='submit'>
          Cadastrar
        </Button>
      </form>

      <br/>

      <Link to='/register/category'>Cadastrar categoria</Link>
    </Default>
  )
}