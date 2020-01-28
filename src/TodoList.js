import React from 'react'
import Todo from './Todo.js'

const TodoList = ({ todos }) => {
  return (
    <div className='text-center mt-3'>
      <ul className='list-group'>
        {todos.map(todo => {
          return <Todo key={todo.id} task={todo.task} completed={todo.completed} />
        })}
      </ul>
    </div>
  )
}

export default TodoList
