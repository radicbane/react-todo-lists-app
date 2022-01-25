import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { MdOutlineDoneAll } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Todostyles from './Todo.module.css'

function Todo({ todos, pendingTodo, deleteTodo, updateTodo }) {
  const [update, setUpdate] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = (value) => {
    updateTodo(update.id, value)
    setUpdate({
      id: null,
      value: '',
    })
  }

  if (update.id) {
    return <TodoForm edit={update} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div className={Todostyles.todo}>
      {todo.text}
      <div className={Todostyles.icons}>
        <MdOutlineDoneAll
          onClick={() => pendingTodo(index)}
          className={
            index.completed ? Todostyles.completed : Todostyles.iconDone
          }
        />
        <RiCloseCircleLine
          onClick={() => deleteTodo(todo.id)}
          className={Todostyles.deleteIcon}
        />
        <BiEdit
          onClick={() => setUpdate({ id: todo.id, value: todo.text })}
          className={Todostyles.editIcon}
        />
        <Link to={`/todolist/${todo.id}`}>
          <AiOutlinePlusCircle className={Todostyles.icon} />
        </Link>
      </div>
    </div>
  ))
}

export default Todo
