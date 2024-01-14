const BASE_URL_ANIMAL = 'https://some-random-api.ml/animal/';

async function getRandomAnimalFact(animal) {
    const response = await fetch(BASE_URL_ANIMAL + animal);

    const {image, fact} = await response.json();
    return {image, fact} ; 
}

export {getRandomAnimalFact};

