import React from 'react'
import Logo from '../logo'
import Search from '../components/Search'
import { Link, NavLink } from 'react-router-dom';
import {DropDownIcon,FavoritesIcon} from "./Icons"


function NavBar() {

    return (
        <div className="Navbar d-flex flex-column" >
          <Link to="/"><Logo /></Link> 
           <div className="grow"/> 
           <div className="h-border"/>
           <Search />
           <div className="h-border"/>
           <Link className="navbar-brand text-1" to='/'>Home</Link>
           <Link className="navbar-brand text-1 " to='/'>Your podcasts {DropDownIcon()}</Link>
           <div className="h-border "/>
           <Link className="navbar-brand text-1 " to='/'>Favorites {FavoritesIcon()}</Link>
        </div>
    )
}

export default NavBar
