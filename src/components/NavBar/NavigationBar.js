import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addCharacters } from "../../store/slice/charactersSlice";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Search } from './Search';
import { SearchIconWrapper } from './SearchIconWrapper';
import { StyledInputBase } from './StyledInputBase';
import { useLazyGetCharactersByNameQuery } from '../../store/apis/swapiApi';

export default function NavigationBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [getCharactersByName, results] = useLazyGetCharactersByNameQuery();

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }
  
  const handleSearch = (event) => {
    if(searchTerm !== '') {
      getCharactersByName(searchTerm);
      setSearchTerm('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  useEffect(() => {
    if(results.data) {
      dispatch(addCharacters(results.data.results));
    }
  }, [results, dispatch])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:'Black'}} position="static">
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: 'yellow', // Set the text color to yellow
              textDecoration: 'none', // Remove underline for the link
            }}
          >
            Starwar's Universe
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
