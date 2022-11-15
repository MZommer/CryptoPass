import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import toast from 'react-hot-toast';
import { useEtherContext } from "../contexts/EtherContext"

export default function SignScreen() {
    // @param contractAddress: string
    // @param tokenId: string  // id of the nft to sign
    // see https://stackoverflow.com/questions/52238637/react-router-how-to-pass-data-between-pages-in-react
    const contractAddress = "0xEe481D239837B85944912B2dE0685E45644959B1";
    const tokenId = 1;


    const { EtherHelper } = useEtherContext();
    const [qrCode, setQrCode] = useState();

    const generatePass = () => {
        if (EtherHelper)
            EtherHelper.generatePass(contractAddress, tokenId)
                .then(pass => setQrCode(pass))
                .catch(err => {
                    toast.error("Accept the signing prompt in order to sign your ticket")
                    setTimeout(() => generatePass(), 2000)
                })
    }
    

    useEffect(() => generatePass(contractAddress, tokenId), [EtherHelper])

    return (
        <div className="page-wrapper">
            <div id="qrbox">
                <div className="container d-flex align-items-center justify-content-center" style={{"marginTop": "15%"}}>
                    {
                        qrCode ? 
                        (
                            <span className="QRContainer"><QRCode value={qrCode}/></span>
                        ) : 
                        null
                    }       
                </div>
            </div>
        </div>
    )


}