import styles from './Gallery.module.scss';
import PropTypes from 'prop-types';



const Gallery = ({ images }) => {
    return (
        <div className={styles.grid}>
            {images.map((image) => (
                <img 
                key={image.id} 
                src={image.url} 
                alt={image.title} />
            ))}
        </div>
    );
};





Gallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};



export default Gallery;
