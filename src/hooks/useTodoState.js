import { useState } from 'react'
import uuid from 'uuid/v4'

const useTodoState = initialTodos => {
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

  return {
    todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
    toggleTodo: toggleTodo,
    editTodo: editTodo
  }
}

export default useTodoState
