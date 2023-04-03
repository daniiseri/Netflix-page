import dadosiniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carrousel from './components/Carousel';
import Header from './components/Header';

function App() {

  return (
    <div style={{background: '#141414', height: '100%'}}>
      <Header/>

      <BannerMain 
        videoTitle={dadosiniciais.categorias[0].titulo}
        url={dadosiniciais.categorias[0].videos[0].url}
        videoDescription='O que é front-end'
      />

      <Carrousel category={dadosiniciais.categorias[0]} ignoreFirstVideo/>

      <Carrousel category={dadosiniciais.categorias[1]} ignoreFirstVideo/>

      <Carrousel category={dadosiniciais.categorias[2]} ignoreFirstVideo/>

      <Carrousel category={dadosiniciais.categorias[3]} ignoreFirstVideo/>

      <Carrousel category={dadosiniciais.categorias[4]} ignoreFirstVideo/>

      <Carrousel category={dadosiniciais.categorias[5]} ignoreFirstVideo/>
    </div>
  )
}

export default App
