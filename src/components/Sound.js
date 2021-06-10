import React from 'react'
import sound from '../images/sound.svg'
function Sound() {
    const Style={ 
        container:{
            width:250, 
            height:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        soundBar:{
            width: 120,
            height: 0,
            marginLeft:5,
            border: "1px solid #FFFFFF"
        }
       }
    return (
        <div style={Style.container}>
            <img src={sound}/>
            <div style={Style.soundBar}/>
        </div>
    )
}

export default Sound
