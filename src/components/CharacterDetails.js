import { Box, Typography } from "@mui/material";

const CharacterDetails = ({character}) => {
    
    return (
        <Box>
            <Typography  variant="h5" component="div">
                {character.name}
            </Typography>
            <hr />
            <Typography variant='h6'>
                Height: {character.height}
            </Typography>
            <Typography variant='h6'>
                Weight: {character.mass + " kg"}
            </Typography>
            <Typography variant='h6'>
                Hair Color: {character.hair_color}
            </Typography>
            <Typography variant='h6'>
                Birth Year: {character.birth_year}
            </Typography>
            <Typography variant='h6'>
                Gender: {character.gender}
            </Typography>
            <br />
        </Box>
    );
}
 
export default CharacterDetails;