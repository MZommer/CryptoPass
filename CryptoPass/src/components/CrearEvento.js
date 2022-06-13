import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


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
            <Row className='text-center'>
                <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                </Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    </div>
    )

    }
}