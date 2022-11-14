
import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/EtherReducer';

import EtherHelper from '../utils/EtherHelper';
import { getEther } from '../utils/getEther';

import { INIT_ETHER } from '../actions';

const EtherContext = createContext();

export const EtherProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, null);


    // connect to wallet
    useEffect(() => {
        getEther()
            .then(ether => dispatch({ type: INIT_ETHER, payload: new EtherHelper(ether) }))
    }, [])


    return <EtherContext.Provider value = {{ EtherHelper: state }}>{children}</EtherContext.Provider>
}

export const useEtherContext = () => useContext(EtherContext);