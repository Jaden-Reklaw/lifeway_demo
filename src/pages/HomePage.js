import { useEffect, useState } from "react";
import { useLazyGetCharactersByNameQuery } from "../store/apis/swapiApi";
import { Button } from "@mui/base";
import { Grid } from "@mui/material";
import CharacterList from "../components/CharactersList";
import { addCharacters } from "../store/slice/charactersSlice";
import { useDispatch, useSelector } from 'react-redux';

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
        console.log("results", results);
        dispatch(addCharacters(results.data.results));
      }
    }, [results, dispatch])

    console.log("characters", characters);
    return (
      <Grid container display="flex" justifyContent="center" alignItems="center">
        <h1>Lifeway Demo App</h1>
        <form onSubmit={handleSearch}>
          <label>Search Character</label>
          <input value={searchTerm} onChange={handleChange} />
          <Button onClick={handleSearch}>Search</Button>
        </form>
        
        <CharacterList characters={characters}/>
        
      </Grid>
  );
}
 
export default HomePage;