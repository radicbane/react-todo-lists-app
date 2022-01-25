import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import useLocalStorage from '../hooks/useLocalStorage'
import { Outlet } from 'react-router-dom'

function TodoList() {
  const [todos, setTodos] = useLocalStorage('todos', [])

  const [todosRemaining, setTodosRemaining] = useState(0)
  useEffect(() => {
    setTodosRemaining(todos.filter((todo) => !todo.completed).length)
  }, [todos])

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const pendingTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = true
    setTodos(newTodos)
  }

  return (
    <div>
      <h2>Pending tasks({todosRemaining})</h2>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        pendingTodo={pendingTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
      <Outlet />
    </div>
  )
}

export default TodoList
