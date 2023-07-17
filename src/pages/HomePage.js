import { Container } from "@mui/material";
import { useSelector } from 'react-redux';
import ProfileLink from "../components/ProfileLink";


const HomePage = () => {
    
  const characters = useSelector((state) => {
      return state.character.data;
    });

    return (
      <Container sx={{justifyContent:"center", marginTop:1}}>
        
        {
          characters.map(character => <ProfileLink key={character.name} character={character} />)
        }
      
      </Container>
  );
}
 
export default HomePage;