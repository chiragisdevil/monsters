import React from "react";
import Card from "../card/Card.jsx"
import "./card-component.css";

function CardList(props){
    let monsterList = props.monsterList;
    let filteredList = monsterList.filter((monster) => monster.name.includes(props.searchedMonster));
    
    return(
        <div className="card-list">
        {filteredList.map( (monster) => 
        <Card 
          key = {monster.id}
          id = {monster.id}
          email = {monster.email}
          monsterName = {monster.name}
        />
        )}
        
      </div>
    )
}

export default CardList;