import React from 'react';
import './App.css';
import { getRandomAnimalFact } from './utils/api';

function App() {
  const [animal, setAnimal] = React.useState('cat');
  const [animalObjFact, setAnimalObjFact] = React.useState(null);

  function onChangeAnimalVal({ target }) {
    setAnimal(target.value);
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        console.log("ini animal stat ", animal);
        const factResult = await getRandomAnimalFact(animal);
        setAnimalObjFact(factResult);
        console.log(factResult);
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data hewan:', error);
      }
    }

    fetchData();
  }, [animal]);

  return (
    <>
      {/* Komponen Input Value Animal */}
      <select onChange={onChangeAnimalVal}>
        <option value="cat">Cat Fact</option>
        <option value="dog">Dog Fact</option>
      </select>

      {/* Komponen Output */}
      <section>
        <div className='row'>
          <label>Image</label>
          <div className='row__content'>
            {animalObjFact === null ? 
              <img src="https://via.placeholder.com/600x400" alt="placeholder image" />
              : 
              <img src={animalObjFact.image} alt="Animal Image" />
            }
          </div>
        </div>

        <div className='row'>
          <label>Fact</label>
          <div className='row__content'>
            {animalObjFact === null ? 
              <p>...loading </p>
              : 
              <p>{animalObjFact.fact}</p>
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
