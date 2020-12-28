import React from "react";
import "./card.css"

function Card(props){
    const url = "https://robohash.org/"+ props.id + "?set=set2";
    return(
        <div className="card-container">
            <img src={url} alt="" height = "180" width="180"/>
            <h2>{props.monsterName}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default Card;