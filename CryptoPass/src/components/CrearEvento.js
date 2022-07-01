import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default class CrearEvento extends Component {
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
    return(
        <div className="page-wrapper">
        <Container>
        <h1 className='text-center'>Event </h1>
            <Form>
                <Row className='text-center mb-3'>
                
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="text" placeholder="Event" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Select aria-label="Default select example">
                            <option>Event type</option>
                            <option value="1">Party</option>
                            <option value="2">Conference</option>
                            <option value="3">concerts</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cantidadEntradas">
                            <Form.Label>amount of tickets available</Form.Label>
                            <Form.Control type="number" placeholder="50" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label=" I accept terms and conditions" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button className="boton" variant="secondary" >
                        Create event
                    </Button>
                </div>
            </Form>
                
        </Container>
    </div>
    )

    }
}