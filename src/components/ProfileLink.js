import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

const ProfileLink = ({character}) => {
    
    return (
        <Card sx={{maxWidth: 1000, margin: 1 }}>
            <CardActionArea component={Link} to={`/profile/${character.name.replace(' ', '_')}`}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        <PersonIcon/> {character.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
 
export default ProfileLink;