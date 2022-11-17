import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEtherContext } from "../contexts/EtherContext";
import { useEventsContext } from "../contexts/EventsContext";
import toast from 'react-hot-toast';
import Loading from "../components/Loading";
import Button from '@mui/material/Button';
import SignScreen from "./SignScreen";
const DummyEventAddress = "0xEe481D239837B85944912B2dE0685E45644959B1";  // Goerli testnet
import { Link } from "react-router-dom"

function Ticket({tokenId, contractAddress}) {
    return (
        <Button  variant="contained" color="secondary">
            <Link to={`/Sign`} state={{tokenId, contractAddress}}>NFTS</Link>
        </Button>
    )
}


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
    console.log(addressTokens)
    return ( 
        <div>
            
            <h1 >{eventInfo.Title}</h1>
            <h5>{eventInfo.Description}</h5>
            <img height="200" src="https://www.cronista.com/files/image/452/452986/6235fa764a52b_360_480!.jpg?s=2b1e61cbad5b0ef53b40c56d6a51a3b2&d=1647706646" />
            <br></br> <br></br>
                <Button variant="contained" color="success"onClick={buyTickets}>
                    Comprar
                </Button><br></br><br></br>
                
            
            
            { addressTokens.length > 0 ? 
                <>
                    <div>Owned Tickets</div> 
                    {addressTokens.map(token => <Ticket key={token.toString()} tokenId={token.toString()} contractAddress={Address}/>)} 
                </>
                : null}
        </div>
    )
}