import React,{useEffect,useState} from 'react'
import playPicture from '../images/play.svg'

function Thumbnail({src="1",title}) {
    const Style={
        thumbnail:{
            display:"flex",
            flexDirection:"column",
            width:220,
            height:170,
            margin:30,   
        },

        title:{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 19,
            color: "#E5E5E5",
            position:"relative",
            top:'120px',
        },
        
        picture:{
            width:200,
            height:120,
            margin:0,
            padding:0,
            position:"absolute",
            cursor:"pointer"

        },
        playPicture:{
        width:200,
        height:120,
        marginLeft:-100,
        padding:0,
        position:"absolute",
        },
    }
    const [picture, setPicture] = useState("")
    const [play, setPlay] = useState(false)
    const playButton=(play)&&<img  src={playPicture} style={Style.picture} />


    useEffect(() => {
    import(`../images/${src}.svg`).then(
        res=>{
         setPicture(res.default)
        }
    )
    }, [])
    

    return (

        <div style={Style.thumbnail}>
            <div className="position-relative" onMouseOver={()=>{setPlay(true)}} onMouseLeave={()=>{setPlay(false)}}>
            <img  src={picture} style={Style.picture} />
            {playButton}
            </div>


            <span  style={Style.title}>{title}</span>

        </div>
        
    )
}

export default Thumbnail
