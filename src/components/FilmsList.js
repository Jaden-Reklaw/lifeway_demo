import FilmDetails from "./FilmDetails";

const FilmsList = ({films}) => {
    return (
        <div>
            {films.map(film => <FilmDetails film={film}/>)}
        </div>
    );
}
 
export default FilmsList;