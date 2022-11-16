import { Link } from "react-router-dom"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(25),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function EventCard({Title, Description, id}) {

    return (
        
        <div style={{display: "inline"}}>
            <Card >
                <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.Jj4q6FxcAHrbIs9sR0cDlAHaE8?pid=ImgDet&rs=1"
                    alt={Title}
                />
                <CardContent>
                    <Typography gu  tterBottom variant="h5" component="div">
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