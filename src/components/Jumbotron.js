import React from 'react';
import { Grid, Typography } from '@mui/material';

const Jumbotron = () => {

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{background:'#333'}}
    >
      <Typography variant='h2' sx={{color: 'whitesmoke'}}>
        Welcome to the Star's Universe!
      </Typography>
      <Typography variant='h4' sx={{color: 'whitesmoke'}}>
        Search character's by name and check out their info.
      </Typography>
    </Grid>
  );
};

export default Jumbotron;