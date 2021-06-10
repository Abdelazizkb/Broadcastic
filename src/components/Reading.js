import React,{useState,useEffect} from 'react'
import {Thumbnails} from '../components/Thumbnails'

function Reading({episode}) {
    const Style={ 
        container:{
          width:500, 
          height:"100%",
          marginLeft:40,
          display:"flex"
        },
        description:{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 500,
            /* identical to box height */
            color: "#E5E5E5",
            padding:0
        },

        title:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            title:{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 22,              
                color: "#E5E5E5",
                margin:0
            }
        },
        image:{
            width:200,
            height:115,
            marginTop:5,
            marginRight:20,
            backgroundSize:"200px 202px"
        },

    }
    

    
    const [picture, setPicture] = useState()
       
    useEffect(() => {
        //   setplaylist(Thumbnails[id])
   
           import(`../images/${Thumbnails[episode.podcast].picture}.svg`).then(
               res=>{
                setPicture(res.default)
               }
           )        
           return () => {
               
           }
        }, [episode])   
    
    
    return (
        <div style={Style.container}>
           <img src={picture} style={Style.image}/>
           <div style={Style.title}>
              <p style={Style.title.title}>{Thumbnails[episode.podcast].name}</p>
              <p style={Style.title.description}>{episode.title}</p> 
           </div>
        </div>

    )
}

export default Reading
