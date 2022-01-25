import React from 'react'
import TodoList from './components/TodoList'
import Header from './components/Header'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="todo-app">
      <Link to="/">
        <Header />
      </Link>
      <TodoList />
      <footer>
        <p>Original page &copy; 2022</p>
      </footer>
    </div>
  )
}

export default App
