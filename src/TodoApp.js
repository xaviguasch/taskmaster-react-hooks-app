import React, { useState } from 'react'
import TodoList from './TodoList'

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'Clean Fishtank', completed: false },
    { id: 2, task: 'Wash Car', completed: true },
    { id: 3, task: 'Grow Beard', completed: false }
  ]

  const [todos, setTodos] = useState(initialTodos)
  return (
    <div className='container mt-5'>
      <h1 className='display-5 text-center'>TODOS WITH HOOKS</h1>

      <TodoList todos={todos} />
    </div>
  )
}

export default TodoApp
