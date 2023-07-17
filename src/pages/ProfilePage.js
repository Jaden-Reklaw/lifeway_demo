import CharacterDetail from '../components/CharacterDetails';
import { useParams } from "react-router-dom";
import { useLazyGetCharactersByNameQuery } from "../store/apis/swapiApi";
import { useEffect } from "react";

const ProfilePage = () => {
    const { id } = useParams();
    const [getCharactersByName, results] = useLazyGetCharactersByNameQuery();

    useEffect(() => {
        getCharactersByName(id.replace('_', ' '))
    }, [getCharactersByName, id])

    
    let character;

    if(results.isSuccess) {
        character = results.data.results[0] || false;
    } 

    return (
        <div>
            <h1>Profile Page</h1>
            {character ? <CharacterDetail key={character.name} character={character}/> : character}
        </div>
    );
}
 
export default ProfilePage;