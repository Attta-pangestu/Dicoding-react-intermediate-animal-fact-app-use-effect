import PropTypes from 'prop-types';


function Row({label, children}) {
    return (
        <div className='row'>
            <label>{label}</label>
            <div className='row__content'>
                {children}
            </div>
        </div>
    );
}

Row.propTypes = {
    label: PropTypes.string.isRequired,
    children : PropTypes.node.isRequired,

};

export default Row;