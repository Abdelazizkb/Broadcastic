import React from 'react'
import Thumbnail from '../components/Thumbnail'
import {Thumbnails} from '../components/Thumbnails'
import { Link, NavLink } from 'react-router-dom';

function Home() {

    const Style={
    home:{
        width:1608,
        display:"flex",
        flexDirection:"column",
    },
    title:{
        width:150,
        position:"relative",
        top:"50px",
        left:"7%",
        marginBottom:50,
        paddingBottom:10,
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 22,
        color: "#E5E5E5",
        borderBottom: "1px solid rgba(255, 255, 255, 0.64)"

    },
    container:{
        display:"flex",
        flexWrap:"wrap",
        alignContent:"start",
        justifyContent:"center"
    },

    }
    return (
        <div style={Style.home}>
           <span style={Style.title} >All playlist</span> 
           <div style={Style.container}>
               {Thumbnails.map((e,i)=>{
                return <Link to={`/playlist/${i}`} key={i} style={{textDecoration:"none"}}><Thumbnail src={e.picture} title={e.name} /></Link> 
               }
               )}

           </div> 
        </div>
    )
}

export default Home
