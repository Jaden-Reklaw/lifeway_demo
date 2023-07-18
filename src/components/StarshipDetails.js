import { Box, Skeleton, Typography } from "@mui/material";
import { useGetStarShipQuery } from "../store/apis/swapiApi";

const StarshipDetails = ({starship}) => {
    const {data, isFetching, isError } = useGetStarShipQuery(starship.replace("https://swapi.dev/api/starships", ''));

    if(isFetching) {
        return <Skeleton animation="wave" />
    }

    if(isError) {
        return <div>{isError}</div>
    }

    return (
        <Box>
            <Typography  variant="h6" component="div">
                Ship: {data.name}
            </Typography>
            <Typography  variant="h6" component="div">
                Model: {data.model}
            </Typography>
            <Typography  variant="h6" component="div">
                Manufacturer: {data.manufacturer}
            </Typography>
            <Typography  variant="h6" component="div">
                Credits: {data.cost_in_credits}
            </Typography>
            <br />
        </Box>
    );
}
 
export default StarshipDetails;