import CharacterCard from '../components/CharacterCard';
import { useParams } from "react-router-dom";
import { useLazyGetCharactersByNameQuery } from "../store/apis/swapiApi";
import { useEffect } from "react";
import { Container } from '@mui/material';

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
        <Container sx={{justifyContent:"center", marginTop:1}}>
            { character ? <CharacterCard key={character.name} character={character}/> : character }
        </Container>
    );
}
 
export default ProfilePage;