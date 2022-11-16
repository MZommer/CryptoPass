import { Link } from "react-router-dom"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function EventCard({Title, Description, id}) {

    return (
        <div>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.Jj4q6FxcAHrbIs9sR0cDlAHaE8?pid=ImgDet&rs=1"
                    alt={Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {Description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <Link to={`/events/${id}`}>More details</Link>
                    </Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
          
        </div>
    )
}