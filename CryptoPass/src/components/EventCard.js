import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardImage from "../img/cardImage.jpg";
import { Link } from 'react-router-dom'
import ComprarEntradas from './ComprarEntradas';

     
function CardHome(props) {
    return (
        <>
            <Card className="text-center" style={{ width: '18rem' }} >
            <Card.Img variant="top" src={props.src ? props.src : cardImage} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>

                <Link to="/ComprarEntradas">                    
                    <Button className="boton" variant="secondary" >Buy tickets</Button>
                </Link>



            </Card.Body>
            </Card>
        </>
        
    )
}


export default CardHome