import React from 'react'
import { useState } from 'react'


interface User {
    ID: string;
    name: string;
}

const Usuario = () => {

    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
         ID:'abcde',
         name: 'Iván Piccardo'})
    }

    const tempUser:User = {
        ID: '2345',
        name: 'Ricardo'
    }



  return (
    <div className='mt-5'>
        <h3>Usuario: useState</h3>
        <button onClick={ login } className='btn btn-outline-primary'>
     Login
        </button>

        {
            (!user) ? <pre> No hay Usuario </pre>
            : <pre>{JSON.stringify(user)}</pre>
        }
    </div>
  )
}

export default Usuario