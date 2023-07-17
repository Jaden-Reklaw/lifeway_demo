import FilmDetails from "./FilmDetails";

const FilmsList = ({films}) => {
    return (
        <div>
            {films.map((film, index) => <FilmDetails key={"film" + index} film={film}/>)}
        </div>
    );
}
 
export default FilmsList;