import StarshipDetails from "./StarshipDetails";

const StarshipsList = ({starships}) => {

    return (
        <div>
            {starships.map((starship, index) => <StarshipDetails key={"starship"+ index} starship={starship}/>)}
        </div>
    );
}
 
export default StarshipsList;