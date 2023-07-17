import { useEffect, useState } from "react";
import { useLazyGetCharactersByNameQuery } from "../store/apis/swapiApi";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { addCharacters } from "../store/slice/charactersSlice";
import { useDispatch, useSelector } from 'react-redux';
import ProfileLink from "../components/ProfileLink";

const HomePage = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => {
      return state.character.data;
    })

    const [searchTerm, setSearchTerm] = useState('');
    const [getCharactersByName, results] = useLazyGetCharactersByNameQuery();

    const handleChange = (event) => {
      setSearchTerm(event.target.value)
    }
  
    const handleSearch = (event) => {
      event.preventDefault();
      if(searchTerm !== '') {
        getCharactersByName(searchTerm);
        setSearchTerm('');
      }
    };

    useEffect(() => {
      if(results.data) {
        dispatch(addCharacters(results.data.results));
      }
    }, [results, dispatch])

    return (
      <Grid>
        
        {
          characters.map(character => <ProfileLink key={character.name} character={character} />)
        }
        
      </Grid>
  );
}
 
export default HomePage;