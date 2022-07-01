import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import QRCode from "react-qr-code";

export default function Sign() {
    const [qrCode, setQrCode] = useState();
    const [errorCode, setErrorCode] = useState();
    const [blockNumber, setBlockNumber] = useState((async () => await window.eth.getBlockNumber())());
    useEffect(() => {
        (async () => setQrCode(await window.eth.generatePass()))()
        .catch(() => setErrorCode("Accept the signing prompt to continue!"));
    }, [blockNumber])
    setInterval(async () => {
        const _blockNumber = await window.eth.getBlockNumber();
        if (_blockNumber !== blockNumber)
            setBlockNumber(_blockNumber);
    }, 10000)
    return (
        <div className="page-wrapper">
                <Container className="text-center" style={{"margin-top": "25%"}}>
                    {qrCode ? <QRCode value={qrCode}/> : <div>{errorCode ? errorCode : "Accept the Sign prompt"}</div>}       
                </Container>
        </div>
    )
}
