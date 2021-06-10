import React,{useEffect,useState,useContext} from 'react'
import { useParams } from 'react-router'
import PlaylistThumbnail from "../components/PlaylistThumbnail"
import Episode from '../components/Episode'
import {Thumbnails} from '../components/Thumbnails'
import PlayinContext from '../hoc/Layout'


function PlayList() {
   const Style={
    container:{
        width:1608,
        display:"flex",
    },
    list:{
        width:"50%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        paddingLeft:"5%"
    },
    grow:{
        height:"17%"
    }
   } 
    

    const {id}=useParams();
    //const [playlist, setplaylist] = useState({})
    const [playlist, setplaylist] = useState({
        episodes:[]
    })

    useEffect(() => {
    setplaylist(Thumbnails[id])
    }, [])

    return (
        <div style={Style.container}>
            <div style={Style.list}>
                 <div style={Style.grow} />
                {playlist.episodes.map(
                     (e,i)=>{
                       return <Episode podcast={id} title={e.title} time={"00:00"} description={e.description} src={e.src}/>
                     }
                 )}
                 
            </div>
            <PlaylistThumbnail id={id}/>
        </div>
    )
}

export default PlayList
