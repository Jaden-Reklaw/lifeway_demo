import { useState } from "react";
import { useLazyGetCharactersByNameQuery } from "../store/apis/swapiApi";
import { Button } from "@mui/base";
import { Grid } from "@mui/material";
import CharacterList from "../components/CharactersList";

const HomePage = () => {

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

    return (
      <Grid container display="flex" justifyContent="center" alignItems="center">
        <h1>Lifeway Demo App</h1>
        <form onSubmit={handleSearch}>
          <label>Search Character</label>
          <input value={searchTerm} onChange={handleChange} />
          <Button onClick={handleSearch}>Search</Button>
        </form>
        
        {results ? <CharacterList characters={results?.data?.results || []}/>: false}
        
      </Grid>
  );
}
 
export default HomePage;