import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import uuid from 'uuid/v4'

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'Clean Fishtank', completed: false },
    { id: 2, task: 'Wash Car', completed: true },
    { id: 3, task: 'Grow Beard', completed: false }
  ]

  const [todos, setTodos] = useState(initialTodos)

  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
  }

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => {
      return todo.id !== todoId
    })

    setTodos(updatedTodos)
  }

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo => {
      return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    })

    setTodos(updatedTodos)
  }

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo => {
      return todo.id === todoId ? { ...todo, task: newTask } : todo
    })

    setTodos(updatedTodos)
  }

  return (
    <div className='container mt-5 bg-secondary p-5'>
      <h1 className='display-5 text-center text-white'>TODOS WITH HOOKS</h1>
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </div>
        <div className='col-12 col-lg-6'>
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  )
}

export default TodoApp
