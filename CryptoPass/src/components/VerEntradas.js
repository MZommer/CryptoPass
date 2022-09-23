import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';


export default class VerEntradas extends Component {
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
        <Container>
            <div className="page-wrapper">
            <h1 className='text-center mt-5'>mis entradas</h1>

        <Card>
            <Card.Body>
                <Card.Text>
                    El lola
                </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
        
        </div>
    </Container>


    )

    }
}