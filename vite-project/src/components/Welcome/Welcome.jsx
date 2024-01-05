

import PropTypes from 'prop-types';

const Welcome = (props) => {
    const { name } = props;

    if (!name) {
        return <div>Please provide a name.</div>;
    }

    return <div>Hello {name}, welcome to my page!</div>;
};

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Welcome