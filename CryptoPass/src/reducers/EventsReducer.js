import {
    GET_EVENTS_BEGIN,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_ERROR,
} from '../actions'

export default function EventsReducer(state, action) {
    switch (action.type) {
        case GET_EVENTS_BEGIN:
            return {
               ...state,
                events_loading: true,
            }
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload,
                events_loading: false,
            }
        case GET_EVENTS_ERROR:
            return {
                ...state,
                events_error: true,
            }
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
}