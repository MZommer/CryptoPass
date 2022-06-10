import React, { Component } from 'react'

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
                    <div className="nothing-to-show d-flex align-items-center justify-content-center">
                       
                    </div>
                </div>
            </div>
        )
    }
}