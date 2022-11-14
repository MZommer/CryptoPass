
import { INIT_ETHER } from '../actions';

export default function EtherReducer (state, action) {
    switch(action.type) {
        case INIT_ETHER:
            return action.payload;
    }
}