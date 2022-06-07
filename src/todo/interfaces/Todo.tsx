import React from 'react'
import { TodoList } from '../components/TodoList';
import TodoProvider from '../context/TodoProvider';
import { TodoState } from './interfaces';
import { useTodos } from '../hooks/useTodos';
import { Title } from '../components/Title';


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



const Todo = () => {

    // const { pendingTodos } = useTodos()

  return (
      <TodoProvider>
        <div>useContext</div>
        <div>
            <Title />
            <TodoList />
    </div>
      </TodoProvider>
  )
}

export default Todo