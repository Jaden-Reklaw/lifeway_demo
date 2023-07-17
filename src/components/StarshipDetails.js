import { useGetStarShipQuery } from "../store/apis/swapiApi";

const StarshipDetails = ({starship}) => {
    const {data, isFetching, isError } = useGetStarShipQuery(starship.replace("https://swapi.dev/api/starships", ''));

    if(isFetching) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>{isError}</div>
    }
    return (
        <div key={starship.model}>
            {JSON.stringify(data)}
        </div>
    );
}
 
export default StarshipDetails;