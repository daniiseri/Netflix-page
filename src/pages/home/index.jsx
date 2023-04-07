import { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carrousel from '../../components/Carousel';
import Default from '../../components/PageDefault';
import categoriesRepositories from '../../repositories/categories';

function App() {
  const [initData, setInitData] = useState([]);

  useEffect(() => {
    categoriesRepositories.getAllCategoriesWithVideos().then((data) => {
      setInitData(data);
    })
  }, []);

  return (
    <Default paddingAll={0}>
      {
        initData.length === 0 && <div>Loading...</div>
      }

      {
        initData?.map((category, index) => {
          if (index === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={category.title}
                  url={category.videos[0].url}
                  videoDescription="O que é front-end"
                />

                <Carrousel category={initData[0]} />
              </div>
            );
          }
          return (
            <Carrousel
              key={category.id}
              category={category}
            />
          );
        })
      }

    </Default>
  );
}

export default App;
