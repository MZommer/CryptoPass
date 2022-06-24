import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import QRCode from "react-qr-code";


export default function Sign() {
    const [qrCode, setQrCode] = useState("");
    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
          const data = await window.eth.generatePass();
          setQrCode(data);
        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, [])
      
    return(
        <div className="page-wrapper">
            <Container className="text-center">

                <QRCode value={qrCode}/>
            </Container>
        </div>
    )
}
