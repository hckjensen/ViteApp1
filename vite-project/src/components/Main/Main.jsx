import ListComponent from "../ListComponent/ListComponent";
import Welcome from "../Welcome/Welcome"

const Main = () => {

    const dishes = ["Pizza", "Pasta", "Burger", "Salad", "Sushi"];

    const movies = ["Star Wars", "Lord of the Rings", "Harry Potter", "The Matrix", "Inception"];

    const names = ["Gunnar", "Marlene", "Jannick", "HC", "Heinz"];

    const randomIndex = Math.floor(Math.random() * names.length);

    const randomName = names[randomIndex];



    return(
        <>
        <Welcome name={randomName} />
        <ListComponent items={dishes} />
        <ListComponent items={movies} />
        </>
    )
}

export default Main