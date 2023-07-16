import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProfileLink = ({character}) => {
    
    return (
        <Card sx={{ maxWidth: 345, margin: 1 }}>
            <CardActionArea component={Link} to={`/profile/${character.name.replace(' ', '_')}`}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {character.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
 
export default ProfileLink;