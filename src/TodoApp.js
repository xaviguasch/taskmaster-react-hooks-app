import React, { useEffect } from 'react'
import useTodoState from './hooks/useTodoState'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]')
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos)

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
