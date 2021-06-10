import React,{useState} from 'react'
import {SearchIcon} from './Icons'

function Search() {

    const Style={
        searchBox:{
            width:230,
            padding:5,
            color:"white",
            border: "none",
            borderRadius:2,
            outline: "none",
            background:"linear-gradient(120.42deg, rgba(0, 163, 255, 0.0952) -25.97%, rgba(0, 255, 209, 0.205493) 23.8%, rgba(0, 92, 20, 0.205493) 100.17%)"

        }
    }


    const [showSearchInput, setShowSearchInput] = useState(false)

    const input= <input style={Style.searchBox} type="text"  placeholder="Search" />

    const span = <span  className="navbar-brand text-1" onClick={()=>setShowSearchInput(true)}>Search {SearchIcon()}</span>

    return <div>{(showSearchInput)? input: span }</div>
    
}

export default Search
