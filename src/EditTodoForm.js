import React from 'react'
import useInputState from './hooks/useInputState'

const EditTodoForm = ({ editTodo, id, task, toggleEditForm }) => {
  const [value, handleChange, reset] = useInputState(task)

  return (
    <div className='text-center'>
      <form
        onSubmit={e => {
          e.preventDefault()
          editTodo(id, value)
          reset()
          toggleEditForm()
        }}
      >
        <input
          onChange={handleChange}
          type='text'
          className='form-control'
          id='edit-todo'
          value={value}
          aria-describedby='edit-todo'
        />
      </form>
    </div>
  )
}

export default EditTodoForm
