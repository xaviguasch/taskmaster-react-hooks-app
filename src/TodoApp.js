import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'Clean Fishtank', completed: false },
    { id: 2, task: 'Wash Car', completed: true },
    { id: 3, task: 'Grow Beard', completed: false }
  ]

  const [todos, setTodos] = useState(initialTodos)

  const addTodo = newTodoText => {
    setTodos([...todos, { id: 3, task: newTodoText, completed: false }])
  }

  return (
    <div className='container mt-5 bg-secondary p-5'>
      <h1 className='display-5 text-center text-white'>TODOS WITH HOOKS</h1>
      <div className='row'>
        <div className='col-6'>
          <TodoList todos={todos} />
        </div>
        <div className='col-6'>
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  )
}

export default TodoApp
