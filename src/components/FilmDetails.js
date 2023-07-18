import { Box, Skeleton, Typography } from "@mui/material";
import { useGetFilmQuery } from "../store/apis/swapiApi";

const FilmDetails = ({film}) => {
    const {data, isFetching, isError} = useGetFilmQuery(film.replace('https://swapi.dev/api/films', ''));

    if(isFetching) {
        return <Skeleton animation="wave" />
    }

    if(isError) {
        return <div>{isError}</div>
    }
    return (
        <Box>
            <Typography  variant="h6" component="div">
                Title: {data.title}
            </Typography>
            <Typography  variant="h6" component="div">
                Episode: {data.episode_id}
            </Typography>
            <Typography  variant="h6" component="div">
                Opening Crawl: {data.opening_crawl}
            </Typography>
            <br />
        </Box>
    );
}
 
export default FilmDetails;