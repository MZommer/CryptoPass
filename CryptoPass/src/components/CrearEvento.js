import React, { Component } from 'react'

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
        <h1>form</h1>
    </div>
    )

    }
}