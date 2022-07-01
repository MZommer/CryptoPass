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
            <div id="qrbox">
                <Container className="d-flex align-items-center justify-content-center" style={{"margin-top": "15%"}}>
                    {
                        qrCode ? 
                        (
                            <span className="QRContainer"><QRCode value={qrCode}/></span>
                        ) : 
                        <div>{errorCode ? errorCode : "Accept the Sign prompt"}</div>
                    }       
                </Container>
            </div>
        </div>
    )
}
