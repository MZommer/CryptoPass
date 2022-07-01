import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import QrReader from 'react-qr-scanner'
import { _error, _success } from '../util/Utils'

export default function ReadQr() {
    const [result, setResult] = useState(""); 
    function handlePass(){
        if (window.eth.valdatePass(result)){
            _success("Valid pass! Continue")
        }
        else {
            _error("Error while validating the pass, please try again")
        }
        
    }
    function handleError(err){
        console.error(err);
    }
    function handleScan(data){
        if (data) {
            setResult(data.text);
            handlePass();
        }
    }

    return (
        <Container className="text-center">
            <QrReader 
            className="text-center"
            facingMode="front"
            onError={handleError}
            onScan={handleScan}
            />
        </Container>
    )
}