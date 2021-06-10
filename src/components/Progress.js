import React from 'react'
import pause from '../images/pause.svg'
import next from '../images/next.svg'
import back from '../images/back.svg'

function Progress() {
    const Style={ 
        container:{
            flex:"1",
            display:"flex",
            flexDirection:"column" ,
            justifyContent:"center",
            alignItems:"center", 
        },
        btnContainer:{
            display:"flex",
        },
        pause:{
            margin:5  
        },
        progress:{
            display:"flex"
        },
        
        progressBar:{
            width: 726.03,
            height: 0,
            marginTop:12,
            border: "1px solid #FFFFFF",                                  
        },

        progressTime:{
            marginLeft:2,
            marginRight:2,
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 17,
            color: "rgba(229, 229, 229, 0.7)",
        },

       }
    return (
        <div style={Style.container}>
            <div style={Style.btnContainer}>
              <img src={back}/>
              <img  style={Style.pause} src={pause} />
              <img src={next}  />
            </div>
            <div style={Style.progress}>
              <span style={Style.progressTime}>00:00</span>
              <span style={Style.progressBar}/>
              <span style={Style.progressTime}>00:00</span>
            </div>
        </div>
    )
}

export default Progress
