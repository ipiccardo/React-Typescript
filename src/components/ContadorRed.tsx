import React from 'react'
import { useReducer } from 'react';

//USE REDUCER SE USAN PARA MANEJAR ESTADOS MA COMPLEJOS Que el useState

const initialState =  {
    contador: 0,
}

type ActionType = {
    type: 'incrementar' | 'decrementar' | 'resetear', 
};


const contadorReducer = ( state: typeof initialState, action: ActionType) => {
   //EL REDURCER SIEMBRE VA A RETORNAR UN NUEVO STATE

   switch (action.type) {
       case 'incrementar' : 
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrementar' :
                return {
                    ...state,
                    contador: state.contador - 1
                }
        case 'resetear' :
            return {
                ...state,
                contador: state.contador = 0
            }
   
       default:
           return state
   }


   return state;
}


const ContadorRed = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, initialState)

  return (
      <>
    <h2>Contador: {contadorState.contador}</h2>
    <button onClick={(e) => {
        dispatch({ type: 'incrementar'})
    }} className='btn - btn-outline-primary'>
        Incrementar
    </button>
    <button onClick={(e) => {
        contadorState.contador > 0 ? 
        dispatch({type: 'decrementar'}) :
        dispatch({ type: 'resetear'})
    }} className='btn - btn-outline-primary'>
        Decrementar
    </button>
    <button onClick={(e) => {
        dispatch({ type: 'resetear'})
    }} className='btn - btn-outline-danger'>
        Resetear
    </button>
      </>
  )
}

export default ContadorRed