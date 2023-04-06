import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/home/App';

import Header from './components/Header';
import RegisterVideo from './pages/register/video';
import RegisterCategory from './pages/register/categoria';

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function NotFound(){
  return(
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#141414',
      fontWeight: '900'
    }}>
      <Header/>
      <p style= {{
        color: 'white',
      }}>ERROR 404 PAGE NOT FOUND</p>
    </div>
  )
  
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' Component={App}/>
        <Route path='/register/video' Component={RegisterVideo}/>
        <Route path='/register/category' Component={RegisterCategory}/>
        <Route path='*' Component={NotFound} />
      </Routes>
    </React.StrictMode>,
  </BrowserRouter>
)
