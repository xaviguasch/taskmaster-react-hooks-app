import React from 'react'
import useInputState from './hooks/useInputState'

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState('')

  return (
    <div className='text-center my-3'>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo(value)
          reset()
        }}
      >
        <div className='form-group'>
          <label className='text-white' htmlFor='todo'>
            Insert "todo" below:
          </label>
          <input
            value={value}
            onChange={handleChange}
            type='text'
            className='form-control'
            id='todo'
            aria-describedby='todo'
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default TodoForm
