import ListComponent from "../ListComponent/ListComponent";
import Gallery from "../gallery/Gallery";
import Welcome from "../Welcome/Welcome"
import styles from './Main.module.scss';

import pic1 from '../../assets/images/pic1.jpg';
import pic2 from '../../assets/images/pic2.jpg';
import pic3 from '../../assets/images/pic3.jpg';
import pic4 from '../../assets/images/pic4.jpg';
import pic5 from '../../assets/images/pic5.jpg';
import pic6 from '../../assets/images/pic6.jpg';
import pic7 from '../../assets/images/pic7.jpg';
import pic8 from '../../assets/images/pic8.jpg';
import pic9 from '../../assets/images/pic9.jpg';
import pic10 from '../../assets/images/pic10.jpg';


const Main = () => {

    const imgArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

    const images = imgArray.map((img, index) => ({
    id: index,
    url: img,
    title: `Image ${index + 1}`
    }));

    const dishes = ["Pizza", "Pasta", "Burger", "Salad", "Sushi"];

    const movies = ["Star Wars", "Lord of the Rings", "Harry Potter", "The Matrix", "Inception"];

    const names = ["John", "Jane", "Joe", "Jill", "Jack"]

    const randomIndex = Math.floor(Math.random() * names.length);

    const randomName = names[randomIndex];



    return(
        <>
        <Welcome name={randomName} />
        <div className={styles.grid}>
            <ListComponent items={dishes} heading="Random Dishes" />
            <ListComponent items={movies} heading="Random Movies"/>
        </div>
        <div>
            <Gallery images={images} />
        </div>
        </>
    )
}

export default Main