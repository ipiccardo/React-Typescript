import { getMaxListeners } from 'process';
import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import useForm from '../hooks/UseForm';

const FormularioDos = () => {

    const {formulario, handleChange} = useForm({
        postal: 'ABC',
        ciudad: 'Buenos Aires'
    });

    const { postal, ciudad } = formulario



    // const [formulario, setFormulario] = useState({
    //     postal: '',
    //     ciudad: '',
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
            <label className='form-label'>Código Postal:</label>
            <input
                onChange={ handleChange }
                type="Text"
                className='form-control'
                name='postal'
                value={ postal }
                />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Ciudad:</label>
            <input type="text"
                className='form-control'
                name='ciudad'
                value={ ciudad}
                onChange={ handleChange }
                />
        </div>

        <pre>{JSON.stringify(formulario)}</pre>
      
        </form>
  )
}

export default FormularioDos