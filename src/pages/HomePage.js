import { Grid } from "@mui/material";
import { useSelector } from 'react-redux';
import ProfileLink from "../components/ProfileLink";
import Jumbotron from "../components/Jumbotron";


const HomePage = () => {
    
  const characters = useSelector((state) => {
      return state.character.data;
    });

    return (
      <>
        <Jumbotron />
        <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center">
          { characters.map(character => <ProfileLink key={character.name} character={character} />)}
        </Grid>
      </>
      
  );
}
 
export default HomePage;