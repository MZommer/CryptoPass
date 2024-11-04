
import { createContext, useContext, useEffect, useState } from 'react';

import EtherHelper from '../utils/EtherHelper';
import { getEther } from '../utils/getEther';

const EtherContext = createContext();

export const EtherProvider = ({ children }) => {
    const [state, setState] = useState();


    // connect to wallet
    useEffect(() => {
        console.log("Getting ether")
        getEther()
            .then(ether => setState(new EtherHelper(ether)))
            .then(() => console.log("Ether got"))
    }, [])


    return <EtherContext.Provider value = {{ EtherHelper: state }}>{children}</EtherContext.Provider>
}

export const useEtherContext = () => useContext(EtherContext);