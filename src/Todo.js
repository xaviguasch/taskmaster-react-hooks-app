import React from 'react'

const Todo = ({ task, completed, id, removeTodo, toggleTodo }) => {
  return (
    <div>
      <li key={id} className='list-group-item bg-light'>
        <div className='row'>
          <div className='col-sm-1'>
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
              onClick={() => toggleTodo(id)}
              defaultChecked={completed}
            />
          </div>
          <div className='col-sm-7'>
            <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</p>
          </div>
          <div className='col-sm-4 d-flex justify-content-end'>
            <button className='btn btn-success btn-sm'>Edit</button>{' '}
            <button className='btn btn-danger btn-sm' onClick={() => removeTodo(id)}>
              Delete
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default Todo
