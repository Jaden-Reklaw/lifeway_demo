import StarshipsList from './StarshipsList';
import FilmsList from './FilmsList';
import { Card, CardContent, Typography } from '@mui/material';

const CharacterDetails = ({ character }) => {

    return (
        <Card sx={{ maxWidth: 1000 }}>
            <CardContent>
            <Typography  variant="h5" component="div">
                {character.name}
            </Typography>
            <hr />
            {JSON.stringify(character)}
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
