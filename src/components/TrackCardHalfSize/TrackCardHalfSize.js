import React from "react"
import LittleImageCard from "../LittleImageCard/LittleImageCard"
import "./TrackCardHalfSize.css"

const TrackCardHalfSize = (props) =>{
    return (
        <div className="TrackCardHalfSize">
            <LittleImageCard
                link="#"
                title="TrackName"
                name="ArtistName"
                trackStyle="pop"
            />
        </div>
    )
}

export default TrackCardHalfSize