import React from 'react'

const TodoList = ({ todos }) => {
  return (
    <div className='text-center mt-3'>
      {todos.map(todo => {
        return (
          <p key={todo.id} className='lead'>
            {todo.task}
          </p>
        )
      })}
    </div>
  )
}

export default TodoList
