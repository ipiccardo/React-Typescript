import React, { useRef } from 'react'
import { useState, useEffect } from 'react'

type milisegundos = {
    milisegundos:number,
    segundos?:number
}


const Timer = ( {milisegundos}:milisegundos ) => {

const [segundos, setSegundos] = useState(0);
const ref = useRef<NodeJS.Timer>()


useEffect( () => {
   ref.current && clearInterval(ref.current)
    console.log('useEffect')
    setInterval( () => setSegundos(s => s + 1), milisegundos )
}, [])

  return (
    <><h4>Timer: <small>{segundos}</small></h4></>
  )
}

export default Timer