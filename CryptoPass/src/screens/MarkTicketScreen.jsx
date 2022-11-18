import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useEtherContext } from "../contexts/EtherContext"
import { toast } from "react-hot-toast";
import Loading from "../components/Loading"

export default function MarkTicketScreen() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const {CPT} = useParams()
    const {EtherHelper} = useEtherContext()
    
    useEffect(() => {
        if (!EtherHelper)
            return
        EtherHelper.valdatePass(CPT)
            .then(isValid => {
                if (isValid)
                    toast.success("Valid Ticket! Enjoy!")
                else
                    toast.error("Ticket not yours!")
                setLoading(false)
            })
            .catch(err => {
                console.log(err.toString())
                toast.error("Invalid Ticket!")
                setError(true)
                setLoading(false)
            })
    }, [EtherHelper])

    if (loading)
        return <Loading/>

    if (error){
        // handle error
    }

    return (
        // handle success
        <></>
    )
}