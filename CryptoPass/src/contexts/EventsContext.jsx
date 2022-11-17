import { createContext, useContext, useEffect, useState, useReducer } from 'react';
import reducer from '../reducers/EventsReducer';
import { events_url as url } from '../constants';
import {
  GET_EVENTS_BEGIN,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
} from '../actions'
export const EventsContext = createContext();
const initialState = {
    events: [
        {
            id: "1",
            Title: "Lollaa 🤪",
            Description: "el lola es en",
            Address: "0xEe481D239837B85944912B2dE0685E45644959B1",
        },
        {
            id: "2",
            Title: "Arcos picado",
            Description: "Arcos es en",
            Address: "0xEe481D239837B85944912B2dE0685E45644959B1",
        },
        {
            id: "3",
            Title: "Wop",
            Description: "wop es en",
            Address: "0xEe481D239837B85944912B2dE0685E45644959B1",
        }
    ],
    events_loading: false,
    events_error: false,
}
export function EventsProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchEvents = async () => {
        dispatch({ type: GET_EVENTS_BEGIN })
        
        try {
          const response = await axios.get(url);
          const events = response.data;
          dispatch({ type: GET_EVENTS_SUCCESS, payload: events })
        } catch (error) {
          dispatch({ type: GET_EVENTS_ERROR });
        }
    }
    

    useEffect(() => {
        //fetchEvents(url); // commented by now
      }, [])


    const getEvent = id => state.events.find(event => event.id == id)

    return <EventsContext.Provider value={{...state, getEvent}}>{children}</EventsContext.Provider>
}

export const useEventsContext = () => useContext(EventsContext);