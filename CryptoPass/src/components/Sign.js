import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import QRCode from "react-qr-code";

export default function Sign() {
    const [qrCode, setQrCode] = useState();
    const [blockNumber, setBlockNumber] = useState((async () => await window.eth.getBlockNumber())());
    useEffect(() => {
        (async () => setQrCode(await window.eth.generatePass()))()
        .catch(console.error);
    }, [blockNumber])
    setInterval(async () => {
        const _blockNumber = await window.eth.getBlockNumber();
        if (_blockNumber !== blockNumber)
            setBlockNumber(_blockNumber);
    }, 10000)
    return (
        <div className="page-wrapper">
            <Container className="text-center">
                {qrCode ? <QRCode value={qrCode}/> : <div>Sign</div>}       
            </Container>
        </div>
    )
}
