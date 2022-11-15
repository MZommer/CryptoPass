import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEtherContext } from "../contexts/EtherContext";
import { useEventsContext } from "../contexts/EventsContext";
import toast from 'react-hot-toast';
import Loading from "../components/Loading";

const DummyEventAddress = "0xEe481D239837B85944912B2dE0685E45644959B1";  // Goerli testnet

export default function EventScreen() {
    const { EtherHelper } = useEtherContext();
    const [eventInfo, setEventInfo] = useState();
    const [addressTokens, setAddressTokens] = useState([]);
    const [amount, setAmount] = useState(1);
    const { getEvent } = useEventsContext();
    const { eventId } = useParams();
    const { Address } = getEvent(eventId);

    const buyTickets = () => {
        EtherHelper.buyTickets(Address, amount)
            .then(() => toast.success("Ticket minted successfully!!"))
            .catch(err => toast.error("Error while trying to mint the tickets, Check that you have enough to make the transaction"))
    }

    useEffect(() => {
        if (!EtherHelper)
            return;

        console.log("getting event info")
        EtherHelper.getEventInfo(Address)
            .then(_eventInfo => setEventInfo(_eventInfo))
            .catch(console.error)
        EtherHelper.getAddressTokens(Address)
            .then(_addressTokens => setAddressTokens(_addressTokens))
            .catch(console.error)
    }, [EtherHelper])
    if (!eventInfo)
        return <Loading/>
    console.log(eventInfo)
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