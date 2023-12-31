import { Box, Skeleton, Typography } from "@mui/material";
import { useGetSpeciesQuery } from "../store/apis/swapiApi";

const SpeciesDetails = ({species}) => {
    const {data, isFetching, isError } = useGetSpeciesQuery(species.replace("https://swapi.dev/api/species", ''));
    
    if(isFetching) {
        return <Skeleton animation="wave" />
    }

    if(isError) {
        return <div>{isError}</div>
    }
    
    return (
        <Box>
            <Typography  variant="h5" component="div">
                Species Info
            </Typography>
            <hr />
            <Typography  variant="h6" component="div">
                Species: {data.name}
            </Typography>
            <Typography  variant="h6" component="div">
                Classification: {data.classification}
            </Typography>
            <Typography  variant="h6" component="div">
                Designation: {data.designation}
            </Typography>
            <br />
        </Box>
    );
}
 
export default SpeciesDetails;