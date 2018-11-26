import React from 'react'
import "./BigImageCard.css"

const BigImageCard = (props) =>{
    return (
        <div className="BigImageCard">
            <img href={props.link}/>
            <p>{props.title}</p>
        </div>
    )
}

export default BigImageCard