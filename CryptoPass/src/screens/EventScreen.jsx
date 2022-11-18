import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
const DummyEventAddress = "0xEe481D239837B85944912B2dE0685E45644959B1";  // Goerli testnet
import Loading from "../components/Loading";
import Select from "../components/Select";

import toast from 'react-hot-toast';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEtherContext } from "../contexts/EtherContext";
import { useEventsContext } from "../contexts/EventsContext";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Ticket({tokenId, contractAddress}) {
    return (
        <Button  variant="contained" color="secondary">
            <Link to={`/Sign`} state={{tokenId, contractAddress}}>NFT {tokenId}</Link>
        </Button>
    )
}

export default function EventScreen({Title, Description, id}) {
    const { EtherHelper } = useEtherContext();
    const [eventInfo, setEventInfo] = useState();
    const [saleInfo, setSaleInfo] = useState();
    const [addressTokens, setAddressTokens] = useState([]);
    const [amount, setAmount] = useState(1);
    const { getEvent } = useEventsContext();
    const { eventId } = useParams();
    const { Address } = getEvent(eventId);

    const buyTickets = () => {
        EtherHelper.buyTickets(Address, amount, saleInfo.saleId, saleInfo.salePrice)
            .then(async tx => await tx.wait())
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
        EtherHelper.getSaleInfo(Address)
            .then(_saleInfo => setSaleInfo(_saleInfo))
            .catch(console.error)

    }, [EtherHelper])
    if (!eventInfo)
        return <Loading/>
    console.log(addressTokens)

    return (

        <>



<Container>
       
    
    </Container>
        
      <Box sx={{ width: '110%', maxWidth: 10000, bgcolor: 'background.paper' }}>
        <Box sx={{ my: 4, mx: 5 }}>
          <Grid container alignItems="center">
       
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
              {eventInfo.Title}
              </Typography>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
          {eventInfo.Description}
          </Typography>
        </Box>
            <Divider variant="middle" sx={{ mb: 3 }}/>
            
           
        <Row >
            
            <Col >
                <img  src='https://definicion.de/wp-content/uploads/2009/09/concierto.jpg'/>
            </Col>
            <Col>
                <Select/>
                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                    <Button variant="contained" color="success"onClick={buyTickets}>Comprar</Button>
                </Box>
                { addressTokens.length > 0 ? 
                <>
                    <div>Owned Tickets</div> 
                    {addressTokens.map(token => <Ticket key={token.toString()} tokenId={token.toString()} contractAddress={Address}/>)} 
                </>
                : null}
            </Col>
        </Row>
               
        </Box>
</>
    );
  }