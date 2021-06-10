import React,{useEffect,useState} from 'react'
import {Thumbnails} from '../components/Thumbnails'
import play from "../images/playarrow.svg"
import favorite from "../images/favorite.svg"

function PlaylistThumbnail({id}) {
    const Style={
        container:{
            width:"1000px",
            display:"flex",
            flexDirection:"column",  
            justifyContent:"center",
            alignItems:"center",
            background: "rgba(12, 2, 16, 0.3)"
        },
        description:{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            textAlign: 'center',
            fontSize: 22,
            color: "rgba(229, 229, 229, 0.7)",
        },
        
        title:{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 22,
            color: "#E5E5E5",
          },
  
        text:{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              textAlign: 'center',
              fontSize: 20,
              color: "rgba(229, 229, 229, 1)",      
              cursor:"pointer",
          },
        
          picture:{
            backgroundSize:"300px 462px"
        }

    
       } 

       const [picture, setPicture] = useState()
       
       useEffect(() => {
        //   setplaylist(Thumbnails[id])
   
           import(`../images/${Thumbnails[id].picture}.svg`).then(
               res=>{
                setPicture(res.default)
               }
           )        
           return () => {
               
           }
       }, [])

    return (
    <div style={Style.container}>
        <img style={Style.picture} src={picture}  />
        <p style={Style.title}>Podcastic</p>
        <p style={Style.description}>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a
            été altérée par l'addition d'humour </p>
        <div className="d-flex">
           <div style={Style.text} className="mx-2 ">Follow<img src={favorite}/></div>
           <div style={Style.text} className="ms-4 ">Play <img src={play}/></div>
        </div>      
    </div>
    )
}

export default PlaylistThumbnail
