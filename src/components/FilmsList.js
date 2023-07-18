import { Typography } from "@mui/material";
import FilmDetails from "./FilmDetails";

const FilmsList = ({films}) => {
    return (
        <div>
            <Typography  variant="h5" component="div">
                Films
            </Typography>
            <hr />
            {films.map((film, index) => <FilmDetails key={"film" + index} film={film}/>)}
        </div>
    );
}
 
export default FilmsList;