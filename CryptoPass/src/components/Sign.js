import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import QRCode from "react-qr-code";

export default function Sign() {
    const generateQR = async setQrCode => {
        useEffect(() => {
            const getPass = async () => setQrCode(await window.eth.generatePass());
            getPass()
              .catch(console.error);
          }, [])
    }
    const qrLoop = async setQrCode => {
        const offset = await window.eth.getNextBlockOffset();
        setTimeout(() => {
            generateQR(setQrCode)
        }, offset);
        qrLoop(setQrCode)
    }
    const [qrCode, setQrCode] = useState(null);
    
    return (
        <div className="page-wrapper">
            {generateQR(setQrCode)}
            <Container className="text-center">
                {qrCode ? <QRCode value={qrCode}/> : <div>Sign</div>}       
            </Container>
        </div>
    )
}
