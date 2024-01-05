
import styles from './ListComponent.module.scss';
import PropTypes from 'prop-types';

const ListComponent = ({ items, heading }) => {
    return (
        <div className={styles.container}>
            <h2>{heading}</h2>
            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

ListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    heading: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListComponent;
