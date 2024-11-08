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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'




export default function EventCard({Title, Description, id}) {


    

    return (
        
        <div >
            <Container >
               
                <Row className="text-center" >
                    <Col className="text-center  " >
                    <Card className="text-center cards">
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://th.bing.com/th/id/OIP.Jj4q6FxcAHrbIs9sR0cDlAHaE8?pid=ImgDet&rs=1"
                            className="fluid"
                            alt={Title}
                        />
                        <CardContent>
                            <Typography  gutterBottom variant="h5" component="div">
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
                            
                        </CardActions>
                        </Card>
                    </Col>
                </Row>
            </Container>

            
        </div>
    )
}