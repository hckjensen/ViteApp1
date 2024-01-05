import ListComponent from "../ListComponent/ListComponent";
import Welcome from "../Welcome/Welcome"
import styles from './Main.module.scss';

const Main = () => {

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
        </>
    )
}

export default Main