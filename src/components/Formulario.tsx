import { getMaxListeners } from 'process';
import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import useForm from '../hooks/UseForm';

interface FormData {
    email: string;
    nombre: string;
    edad?: number
}

const Formulario = () => {

    
    const { email, nombre, edad, formulario, handleChange } = useForm<FormData>(
        {
            email: 'ivan.piccardo@gmail.com',
            nombre: 'Iván Piccardo',
            edad: 31
        }
        );
        
        // const { email, nombre, edad } = formulario;

       
    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: '',
    // });


    // const handleChange = ( { target }: ChangeEvent<HTMLInputElement> ) =>
    // {
    //     const {name, value } = target

    //     setFormulario({
    //         ...formulario,
    //         [ name ]: value
    //     })
    // }

  return (
    <form autoComplete='off'>
        <div className='mb-3'>
            <label className='form-label'>Email:</label>
            <input
                onChange={ handleChange }
                type="email"
                className='form-control'
                value={email}
                name='email'
                />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Nombre:</label>
            <input type="text"
                className='form-control'
                name='nombre'
                value={nombre}
                onChange={ handleChange }
                />
        </div>

        <div className='mb-3'>
            <label className='form-label'>Edad:</label>
            <input type="text"
                className='form-control'
                name='edad'
                value={edad}
                onChange={ handleChange }
                />
        </div>

        <pre>{JSON.stringify(formulario)}</pre>
      
        </form>
  )
}

export default Formulario