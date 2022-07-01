import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardImage from "../img/cardImage.jpg";


function CardHome(props) {
    return (
        <>
            <Card className="text-center" style={{ width: '18rem' }} >
            <Card.Img variant="top" src={props.src ? props.src : cardImage} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button className="boton" variant="secondary" >Buy tickets</Button>
            </Card.Body>
            </Card>
        </>
        
    )
}


export default CardHome