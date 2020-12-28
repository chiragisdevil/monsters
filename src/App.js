import React, {useState, useEffect} from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox"
import "./App.css"

function App() {
    let [userList,setMonsterName] = useState([]);
    let [searchedMonster, setSearchedMonster] = useState("");
    
    useEffect(()=>
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(userList => setMonsterName(userList))
      ,[]
    );

    return (
      <div className="App">
        <h1>Devil's Child</h1>
        <SearchBox 
          setSearchedItem = {setSearchedMonster}
          placeholder = "Monster Name"
        />
        <CardList 
          monsterList = {userList}
          searchedMonster = {searchedMonster}
        />
      </div>
    );
}
export default App;
