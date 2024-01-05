

import PropTypes from 'prop-types';

const ListComponent = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

ListComponent.propTypes = {
    items: PropTypes.array.isRequired,
};

ListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListComponent;
