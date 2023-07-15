import StarshipDetails from "./StarshipDetails";

const StarshipsList = ({starships}) => {

    return (
        <div>
            {starships.map(starship => <StarshipDetails key={starship} starship={starship}/>)}
        </div>
    );
}
 
export default StarshipsList;