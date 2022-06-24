import React, { useEffect, useState } from 'react'
import QrReader from 'react-qr-scanner'
const DELAY = 100;

export default function ReadQr() {
    const [result, setResult] = useState("");
    function handlePass(){
        if (window.eth.valdatePass(result)){

        }
        else {

        }
        
    }
    function handleError(err){
        console.error(err);
    }
    function handleScan(data){
        if (data)
            setResult(data.text);
            handlePass();
    }

    return (
        <>
        
            <QrReader  className="text-center"
            onError={handleError}
            onScan={handleScan}
            />
        </>
    )
}