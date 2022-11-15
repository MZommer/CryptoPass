import { useEffect } from "react";
import { useState } from "react";
import { useEtherContext } from "../contexts/EtherContext"

import toast from 'react-hot-toast'
import Loading from "../components/Loading";

const DummyEventAddress = "0xEe481D239837B85944912B2dE0685E45644959B1";  // Goerli testnet

export default function EventScreen() {
    const { EtherHelper } = useEtherContext();
    const [eventInfo, setEventInfo] = useState();
    const [addressTokens, setAddressTokens] = useState();
    const [amount, setAmount] = useState(1);

    const buyTickets = () => {
        EtherHelper.buyTickets(DummyEventAddress, amount)
            .then(() => toast.success("Ticket minted successfully!!"))
    }

    useEffect(() => {
        if (!EtherHelper)
            return;

        console.log("getting event info")
        EtherHelper.getEventInfo(DummyEventAddress)
            .then(_eventInfo => setEventInfo(_eventInfo))
            .then(() => console.log(eventInfo))
            .catch(console.error)
        EtherHelper.getAddressTokens(DummyEventAddress)
            .then(_addressTokens => setAddressTokens(_addressTokens))
            .then(() => console.log(addressTokens))
            .catch(console.error)
    }, [EtherHelper])

    if (!eventInfo)
        return <Loading/>
    return ( 
        <div>
            <h1>{eventInfo.Title}</h1>
            <h3>{eventInfo.Description}</h3>

            <button onClick={buyTickets}>Comprar entradas</button>
            { !addressTokens? 
                <div>Owned Tickets {addressTokens.join(", ")}</div> 
                : null}
        </div>
    )
}