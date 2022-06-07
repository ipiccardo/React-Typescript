import React from 'react'
import TodoContext from './TodoContext';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoState } from '../interfaces/interfaces';

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [{
        id: '1',
        desc: 'Recolectar las piedras del infinito',
        completed: false
    },
    {
        id: '2',
        desc: 'Piedra del alma',
        completed: false
    }],
    completed: 0,
    pending: 2
}


interface todoProvidersProps {
    children: JSX.Element | JSX.Element[]
}



const TodoProvider = ({children}: todoProvidersProps ) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    const toggleTodo = (id: string ) => {
        dispatch({ type: 'toggleTodo', payload: { id }})
    }

  return (
        <TodoContext.Provider value={{ todoState, toggleTodo}}>
            { children }
        </TodoContext.Provider>
  )
}

export default TodoProvider