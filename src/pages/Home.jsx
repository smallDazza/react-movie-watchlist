import React, { useState } from "react";

export default function Home(){
    const [query, setQuery] = useState("");
    
    const fetchMovies = async() => {
        // Using fetch()
        // const response = await fetch(`http://www.omdbapi.com/${apikey}/${query}`); 

        // Using axios()
    }

    return(
        <div>
            <h1>Home for movies search</h1>
            <input 
            type="text"
            placeholder="Search for movies..."
            />
            <button>Search</button>
        </div>
    )
}