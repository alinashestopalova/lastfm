import React from 'react'
import "./LittleImageCard.css"

const LittleImageCard = (props) =>{
    return (
        <div className="LittleImageCard">
            <div className="LittleImageCard-item">
                <img style={{border:"1px solid #000", width:"100px", height:"100px"}} href={props.link}/>
            </div>
            <div className="LittleImageCard-item">
                <span>{props.title}</span>
                <span className="LittleImageCard-name">{props.name}</span>
                <p>{props.trackStyle}</p>
            </div>
        </div>
    )
}

export default LittleImageCard