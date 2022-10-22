import React, { useEffect, useState } from 'react'
import ShowLocation from './ShowLocation'

const Location = () => {
    const [coords,setCoords]=useState({
        lat:"",
        long:""
    })
    const [navError,setNavError]=useState("")

    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {setCoords({lat:position.coords.latitude,long:position.coords.longitude}); setNavError('') }
            ,
            (err)=> {setNavError(err.message); setCoords({
                lat:"",
                long:""
            })}
          )
    },[])

    console.log(coords,navError)
  return (
    <div>
         
         <ShowLocation coords={coords} navError={navError} />
    </div>
  )
}

export default Location