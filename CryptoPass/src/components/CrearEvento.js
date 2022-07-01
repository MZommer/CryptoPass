import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CrearEvento extends Component {
    render() {
    return(
        <div className="page-wrapper">
        <Container>
        <h1 className='text-center'>Event </h1>
            <Form action={`https://CryptoPassServices.matiaszommer.repl.co/v1/events/create`} method="POST">
                <Row className='text-center mb-3'>
                
                    <Col>
                        <Form.Group className="mb-3" controlId="Title">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="text" placeholder="Event" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Genres">
                            <Form.Label>Genres</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Tags">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="MinAge">
                            <Form.Label>MinAge</Form.Label>
                            <Form.Control type="number" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="IsActive">
                            <Form.Label>IsActive</Form.Label>
                            <Form.Control type="text" placeholder="50" />
                        </Form.Group>
                    </Col>
                    <Col>
                        
                        
                        <Form.Group className="mb-3" controlId="Location">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="ReleaseDate">
                            <Form.Label>ReleaseDate</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="TicketAmount">
                            <Form.Label>amount of tickets available</Form.Label>
                            <Form.Control type="number" placeholder="50" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="IsPublic">
                            <Form.Label>IsPublic</Form.Label>
                            <Form.Control type="number" placeholder="50" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="TicketTypes">
                            <Form.Label>TicketTypes</Form.Label>
                            <Form.Control type="number" placeholder="50" />
                        </Form.Group>
                        
                    </Col>
                </Row>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label=" I accept terms and conditions" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button type="submit"className="boton" variant="secondary" >
                        Create event
                    </Button>
                </div>
            </Form>
                
        </Container>
    </div>
    )

    }
}