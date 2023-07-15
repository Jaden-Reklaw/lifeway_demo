import CharacterDetails from "./CharacterDetails";

const CharacterList = ({ characters }) => {

    
    return (
        <div>
            {characters.map(character => <CharacterDetails key={character.name} character={character} />)}
        </div>
    );
}
 
export default CharacterList;