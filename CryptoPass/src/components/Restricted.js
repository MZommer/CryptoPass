import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import car1 from "../img/concierto.jpg";
import car2 from "../img/concierto2.jpg";
import car3 from "../img/conferencia.jpg";
import card1 from "../img/cardImage.jpg";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EventCard from './EventCard';
import ComprarEntrada from './ComprarEntrada';






export default class Restricted extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: undefined,
            author: undefined,
            eth_connected: this.isConnected()
        }
    }

    isConnected() {
        return localStorage.getItem('eth_connected') === 'y'
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    observeStorage() {
        this.setState({ eth_connected: this.isConnected() })
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="page-content">  
                    <Carousel className='mb-3'>
                        
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={car1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={car2}
                            alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={car3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Container className='mb-3'>
                        <Row className='text-center'>
                            <Col>
                                <div className="d-grid gap-2 mb-3">  
                                    <Button className="boton" variant="secondary" >Create event</Button>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-grid gap-2 mb-3" > 
                                    <Button className="boton" variant="secondary" onClick={ComprarEntrada}>Buy tddickets</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col><EventCard/></Col>
                            <Col><EventCard/></Col>
                            <Col><EventCard/></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}