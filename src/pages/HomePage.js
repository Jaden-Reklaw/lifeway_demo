import { useEffect, useState } from "react";
import { useLazyGetCharactersByNameQuery } from "../store/apis/swapiApi";
import { Box, FormControl, Grid, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import { addCharacters } from "../store/slice/charactersSlice";
import { useDispatch, useSelector } from 'react-redux';
import ProfileLink from "../components/ProfileLink";
import { CiSearch } from 'react-icons/ci'

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
        <h1>Lifeway Demo App</h1>
        <form onSubmit={handleSearch}>
            <TextField
              value={searchTerm} 
              id="character_search" 
              label="Search Character" 
              variant="filled" 
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiSearch />
                  </InputAdornment>
                ),
              }}
          />
          
        </form>
        
        {
          characters.map(character => <ProfileLink character={character} />)
        }
        
      </Grid>
  );
}
 
export default HomePage;