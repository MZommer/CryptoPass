import { Link } from "react-router-dom"

export default function EventCard({Title, Description, id}) {

    return (
        <div>
            <h1>{Title}</h1>
            <h3 style={{opacity:"50%"}}>{Description}</h3>
            <Link to={`/events/${id}`}>More details</Link>
        </div>
    )
}