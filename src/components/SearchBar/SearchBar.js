import React, {useContext} from "react";
import {Context} from "../../App";


export default function SearchBar () {

    const {search, setSearch} = useContext(Context);

    const handleSearch = (event) => {
        setSearch(event.target.value) 
    }


    return(
        <input onChange={handleSearch} value={search} />
    )
};