import React from 'react'
import Reading from '../components/Reading'
import Progress from './Progress'
import Sound from '../components/Sound'

function Playing({episode}) {
    const Style={ 
        container:{
            height:"13%",
            background:"radial-gradient(108.49% 158.31% at 70.21% 6.49%, #4C4B4B 58.08%, rgba(34, 33, 33, 0.632797) 99.99%, rgba(34, 33, 33, 0) 100%, rgba(34, 33, 33, 0.0231664) 100%)",
            display:"flex",
            zIndex:"11",
        },
       }
    return (
        <div style={Style.container}>
            <Reading episode={episode}/>
            <Progress src={episode.src}/>
            <Sound />
        </div>
    )
}

export default Playing

