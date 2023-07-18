import { Typography } from "@mui/material";
import StarshipDetails from "./StarshipDetails";

const StarshipsList = ({starships}) => {

    return (
        <div>
            <Typography  variant="h5" component="div">
                Starships
            </Typography>
            <hr />
            {starships.map((starship, index) => <StarshipDetails key={"starship"+ index} starship={starship}/>)}
        </div>
    );
}
 
export default StarshipsList;