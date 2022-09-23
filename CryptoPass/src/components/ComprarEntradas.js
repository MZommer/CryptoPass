import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import Comprobante from './Comprobante';



function ComprarEntradas() {
    return (
        <>
            <Container>
            <div className="page-wrapper">
                <h1 className='text-center mt-5'>Buy tickets </h1>

                <Form action={`https://CryptoPassServices.matiaszommer.repl.co/v1/events/create`} method="POST">
                    <Form.Group className="mb-3" controlId="Title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="Text" placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="textarea" placeholder="Description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Location">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3"controlId="Date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>

                    <Form.Group className="mb-3"controlId="RelaseDate">
                        <Form.Label>RelaseDate</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="TicketAmount">
                        <Form.Label>Ticket Amount</Form.Label>
                        <Form.Control type="number" placeholder="500" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="TicketType">
                        <Form.Label>Ticket type</Form.Label>
                        <Form.Control type="text" placeholder="party" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Genres">
                        <Form.Label>Genres</Form.Label>
                        <Form.Control type="text" placeholder="Genres" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Tags">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control type="text" placeholder="no se" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="MinAge">
                        <Form.Label>Min Age</Form.Label>
                        <Form.Control type="number" placeholder="18" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="mintedTickets">
                        <Form.Label>Minted Tickets</Form.Label>
                        <Form.Control type="text" placeholder="no se" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I accept bases and conditions" />
                    </Form.Group>

                    <div className="d-grid gap-2"> 
                        <Link to="/compras">                    
                            <Button type="submit"className="boton mb-4" variant="secondary"> Buy tickets</Button>
                        </Link>
                    </div>
                </Form>
                </div>

            </Container>
        </>
    )
}

export default ComprarEntradas