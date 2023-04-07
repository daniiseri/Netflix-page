import BannerMain from '../../components/BannerMain';
import Carrousel from '../../components/Carousel';
import { useEffect, useState } from 'react';
import Default from '../../components/PageDefault';

function App() {
  
  const[initData, setInitData] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') 
       ? 'http://localhost:3000/categories?_embed=videos'
       : 'https://helptechflix-server.herokuapp.com/categories/';

      fetch(URL).then(res => res.json()).then(data => setInitData([...data]));
  }, [])

  return (
    <Default paddingAll={0}>
      {
        initData.length === 0 && <div>Loading...</div>
      }

      {
        initData.map((category, index) => {
        if(index === 0)
        {
          return (
            <div key={category.id}>
              <BannerMain 
                videoTitle={initData[0].title}
                url={initData[0].videos[0].url}
                videoDescription='O que é front-end'
              />

              <Carrousel category={initData[0]} ignoreFirstVideo/>
            </div>
          )
          }
          return(
            <Carrousel 
              key={category.id} 
              category={category} 
            />
        )  
        })
      }
      
    </Default>
  )
}

export default App
