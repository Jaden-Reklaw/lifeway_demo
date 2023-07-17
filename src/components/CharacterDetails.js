import StarshipsList from './StarshipsList';
import FilmsList from './FilmsList';
import { Card, CardContent, Typography } from '@mui/material';
import SpeciesDetails from './SpeciesDetails';

const CharacterDetails = ({ character }) => {

    return (
        <Card sx={{ maxWidth: 1000 }}>
            <CardContent>
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
            {
                character.species.length > 0 ? 
                <SpeciesDetails species={character.species[0]} /> :
                <Typography variant='h6'>
                    Species: Unknown
                </Typography>
            }
            
            <br />
            <Typography  variant="h5" component="div">
                Starships
            </Typography>
            <hr />
            <StarshipsList starships={character.starships} />
            <Typography  variant="h5" component="div">
                Films
            </Typography>
            <hr />
            <FilmsList films={character.films} />
            </CardContent>
            
        </Card>
    );

};

export default CharacterDetails;
