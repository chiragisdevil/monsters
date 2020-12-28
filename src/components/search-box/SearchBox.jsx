// Input - 
// 1) placeholder to display on the search box
// 2) setSearchedItem method that sets the state or stores the searched field

import React from "react";
import TextField from '@material-ui/core/TextField';
import "./InputSearch.css"

function SearchBox(props){
    return (
        <TextField id="outlined-basic" label={props.placeholder} variant="outlined"  className="InputSearch"
        onChange={(event) => (props.setSearchedItem(event.target.value))}/>
       
    )
}

export default SearchBox;
// Above is the materia ui component to replace the standard html input tag
 {/* <input className="InputSearch" type="search" placeholder="Monster Name" 
            onChange={(event) => (props.searchedMonster(event.target.value))}
        /> */}