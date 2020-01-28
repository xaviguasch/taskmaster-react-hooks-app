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
    <div className='container mt-5'>
      <h1 className='display-5 text-center'>TODOS WITH HOOKS</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default TodoApp
