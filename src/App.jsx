import React from 'react';
import './App.css';
import AnimalSelect from './components/AnimalSelectOption';
import AnimalFactCard from './components/AnimalFactCard';
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

    return () => {
      setAnimalObjFact(null);
    } ;
  }, [animal]);

  return (
    <>
      <AnimalSelect onChangeAnimalHandler={onChangeAnimalVal} />
      {/* Komponen Output */}
      <AnimalFactCard animalObjFact={animalObjFact} />
      
    </>
  );
}

export default App;
