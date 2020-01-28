import React from 'react'

const Todo = ({ task, completed, id }) => {
  return (
    <div>
      <li key={id} className='list-group-item bg-light'>
        <div className='row'>
          <div className='col-1'>
            <input type='checkbox' className='form-check-input' id='exampleCheck1' />
          </div>
          <div className='col-7'>
            <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</p>
          </div>
          <div className='col-4 d-flex justify-content-end'>
            <button className='btn btn-success btn-sm'>Edit</button>{' '}
            <button className='btn btn-danger btn-sm'>Delete</button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default Todo
