import { useEventsContext } from "../contexts/EventsContext"

import Loading from '../components/Loading';
import EventCard from "../components/EventCard";

export default function HomeScreen() {
    const { events, events_loading, events_error } = useEventsContext();

    if (events_loading)
        return <Loading/>;
    
    if (events_error)
        return <Loading/>; // TODO: handle error

    return (
        <div className='container d-flex justify-content-between flex-wrap'>
            {events.map(event => <EventCard {...event}/>)}
        </div>
    )
}