import React,{useState,useEffect} from 'react'
import Episode from '../components/Episode'
import NavBar from '../components/NavBar'
import Playing from '../components/Playing'

export const PlayinContext=React.createContext()

function Layout({children}) {
    const Style={
     main:{
         height:"87%",
         width:"100%",
         display:"flex",
     }
    }
    const [episode, setEpisode] = useState({
        podcast:0,
        title:"first episode",
        description:"ici ou là, mais la majeure partie d'entre elles adition d'humour ",
        src:"///home/snake/broadcastic/src/audio/how-to-start-a-podcast-2020-podcasting-for-beginners.mp3"  
       })
    const handleSetEpisode=(episode)=>{
      setEpisode(episode)
    }
    useEffect(() => {
    console.log(episode)
    }, [])
    return (
        <PlayinContext.Provider value={handleSetEpisode} >
        <div className="main" style={Style.main}>
            <NavBar/>
            <>
              {children}
            </>
        </div>
        <Playing episode={episode}/>
        </PlayinContext.Provider>
    )
}

export default Layout
