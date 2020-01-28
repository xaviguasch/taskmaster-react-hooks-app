import React from 'react'
import useInputState from './hooks/useInputState'

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState('')

  return (
    <div className='text-center mt-3'>
      <p className='lead'>{value}</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo(value)
          reset()
        }}
      >
        <input type='text' value={value} onChange={handleChange} />
      </form>
    </div>
  )
}

export default TodoForm
