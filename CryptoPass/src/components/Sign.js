import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import QRCode from "react-qr-code";


export default function Sign() {
    const [qrCode, setQrCode] = useState("");
    useEffect(() => {
        const getPass = async () => 
          setQrCode(await window.eth.generatePass());
        getPass()
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
