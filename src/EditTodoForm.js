import React from 'react'
import useInputState from './hooks/useInputState'

const EditTodoForm = ({ editTodo, id, task, toggleEditForm }) => {
  const [value, handleChange, reset] = useInputState(task)

  return (
    <div className='form-group mt-3'>
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
          autoFocus
        />
      </form>
    </div>
  )
}

export default EditTodoForm
