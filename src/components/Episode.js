import React,{useContext} from 'react'
import play from '../images/playarrow.svg'
import {PlayinContext} from '../hoc/Layout'

function Episode({podcast,title,time,description,src}) {
    const Style={
        container:{
            display:"flex",
            flexDirection:"column",
            margin:10,
            cursor:"pointer"
        },
        description:{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "19px",
            color: "rgba(229, 229, 229, 0.7)"
        },
        header:{
            display:"flex",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "19px",
            color: "rgba(229, 229, 229, 0.7)"
        },

        grow:{
            width:"49%"
        }
    }
    const playinContext = useContext(PlayinContext)
    
    const handleClick=()=>{
            console.log("object")
            playinContext( {
                podcast,title,description,src
            })
        }
    return (
 
        <div style={Style.container} onClick={handleClick}>
            <div style={Style.header}>
                <img src={play} />
                <span>{title}</span>
                <div style={Style.grow}/>
                <span >{time}</span>
            </div>
            <div style={Style.description}>
                {description}
            </div>
        </div>
        
    )
}

export default Episode
