import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import toast from 'react-hot-toast';
import { useEtherContext } from "../contexts/EtherContext"
import { useLocation } from "react-router-dom";

export default function SignScreen() {
    // @param contractAddress: string
    // @param tokenId: string  // id of the nft to sign

    const location = useLocation();
    
    const contractAddress = location.state.contractAddress;
    const tokenId = location.state.tokenId;

    const { EtherHelper } = useEtherContext();
    const [qrCode, setQrCode] = useState();

    const generatePass = () => {
        if (EtherHelper)
            EtherHelper.generatePass(contractAddress, tokenId)
                .then(pass => {
                        const url = "metamask://" + window.location.host + "/markTicket/" + pass
                        setQrCode(url)
                    })
                .catch(err => {
                    console.error(err)
                    toast.error("Accept the signing prompt in order to sign your ticket")
                    setTimeout(() => generatePass(), 3000)
                })
    }
    

    useEffect(() => generatePass(contractAddress, tokenId), [])

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