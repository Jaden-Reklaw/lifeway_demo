import StarshipsList from './StarshipsList';
import FilmsList from './FilmsList';

const CharacterDetails = ({ character }) => {

    return (
        <div>
            <h2>Character Details</h2>
            {JSON.stringify(character)}
            <h2>Starships Details</h2>
            <StarshipsList starships={character.starships} />
            <h2>Films Details</h2>
            <FilmsList films={character.films} />
        </div>
    );

};

export default CharacterDetails;
