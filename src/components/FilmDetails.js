import { useGetFilmQuery } from "../store/apis/swapiApi";

const FilmDetails = ({film}) => {
    const {data, isFetching, isError} = useGetFilmQuery(film.replace('https://swapi.dev/api/films', ''));

    if(isFetching) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>{isError}</div>
    }
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
}
 
export default FilmDetails;