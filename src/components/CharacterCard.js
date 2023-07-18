import StarshipsList from './StarshipsList';
import FilmsList from './FilmsList';
import { Card, CardContent, Typography } from '@mui/material';
import SpeciesDetails from './SpeciesDetails';
import CharacterDetails from './CharacterDetails';

const CharacterCard = ({ character }) => {

    return (
        <Card sx={{ maxWidth: 1000 }}>
            <CardContent>
                <CharacterDetails character={character} />

                {
                    //this is ugly and I would like to refactor lol
                    character.species.length > 0 ? 
                    <SpeciesDetails species={character.species[0]} /> :
                    <>
                        <Typography variant='h5'>
                            Species Info
                        </Typography>
                        <hr />
                        <Typography variant='h6'>
                            Species: Human
                        </Typography>
                        <br />
                    </>
                }
            
                <StarshipsList starships={character.starships} />
                <FilmsList films={character.films} />
            </CardContent>
        </Card>
    );

};

export default CharacterCard;
