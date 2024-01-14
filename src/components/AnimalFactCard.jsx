import PropTypes from 'prop-types';
import Row from './_base/Row';

function AnimalFactCard ({animalObjFact}) {
    const {image, fact} = animalObjFact === null ? {image : null, fact: null} : animalObjFact ; 
    
    return(
        <section>
            <Row label="Image">
                {image === null ? 
                <img src="https://via.placeholder.com/600x400" alt="placeholder image" />
                : 
                <img src={animalObjFact.image} alt="Animal Image" />
                }
            </Row>

            <Row label='Animal Fact'>
                {fact === null ? 
                <p>...loading </p>
                : 
                <p>{animalObjFact.fact}</p>
                }
            </Row>
        </section>
    );
}

AnimalFactCard.propTypes = {
    animalObjFact : PropTypes.object,
}


export default AnimalFactCard;


