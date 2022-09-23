import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import car1 from "../img/concierto.jpg";
import car2 from "../img/concierto2.jpg";
import car3 from "../img/conferencia.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import EventCard from './EventCard';
import ComprarEntradas from './ComprarEntradas';

import { Link } from 'react-router-dom'



export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://cryptopassservices.matiaszommer.repl.co/v1/events/search")
          .then(response => response.json())
          .then(events => setEvents(events));
    }, [])

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
                            <Link to="/ComprarEntradas">
                                <div className="d-grid gap-2 mb-3">  
                                    <Button className="boton" variant="secondary" >Buy tickets</Button>
                                </div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/CrearEvento">
                                <div className="d-grid gap-2 mb-3">  
                                    <Button className="boton" variant="secondary" >Create event</Button>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <div className="d-flex justify-content-between flex-wrap">
                            {events.map(event => <EventCard title={event.Title} text={event.Description} />)}
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
