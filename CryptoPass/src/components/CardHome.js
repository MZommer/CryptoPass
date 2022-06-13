import card1 from "../img/cardImage.jpg";
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function CardHome() {
    return (
        <>
            <Card className="text-center" style={{ width: '18rem' }} >
            <Card.Img variant="top" src={card1} />
            <Card.Body>
                <Card.Title>Event Example</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button className="boton" variant="primary" >Buy tickets</Button>
            </Card.Body>
            </Card>
        </>
        
    )
}


export default CardHome