import PropTypes from 'prop-types';

function AnimalSelect ({onChangeAnimalHandler}) {

    return (
        <select onChange={onChangeAnimalHandler}>
            <option value="cat">Cat Fact</option>
            <option value="dog">Dog Fact</option>
        </select>
    );
}

AnimalSelect.propTypes = {
    onChangeAnimalHandler: PropTypes.func.isRequired,
}

export default AnimalSelect;