import React from 'react'
import { useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0)
  
  // const incrementar = () => {
  //     setCounter(counter + 1)
  // }

  const incremetarDos = ( numero:number):void => {
    setCounter(counter+2)
  }


  return (
    <div className='mt-5'>
        <h3>Counter: useState</h3> 
        <span>Valor: {counter} </span>
        <hr />
        <button className='btn btn-outline-primary mt-2' onClick={(e) => {
          setCounter(counter+1) }}>+1</button> 
        <hr />
        <button className='btn btn-outline-primary mt-2' onClick={(e) => {
          counter >= 1 ?
          setCounter(counter-1) :
          setCounter(0)}}>-1</button>    
          <hr />
        <button className='btn btn-outline-primary mt-2' onClick={() => incremetarDos(2)}
          >+2</button> 
           <hr />
        <button className='btn btn-outline-primary mt-2' onClick={() => setCounter(0)}
          >Reset</button>        
        </div>
  )
}

export default Counter