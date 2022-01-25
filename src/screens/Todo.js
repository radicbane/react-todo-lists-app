import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'
import Todostyles from './Todo.module.css'

function Todo({ items, completeItem, deleteItem, updateItem }) {
  const [update, setUpdate] = useState({
    id: null,
    value: '',
  })

  const submitUpdate = (value) => {
    updateItem(update.id, value)
    setUpdate({
      id: null,
      value: '',
    })
  }

  if (update.id) {
    return <TodoForm edit={update} onSubmit={submitUpdate} />
  }

  return items.map((item, index) => (
    <div
      className={item.isComplete ? Todostyles.complete : Todostyles.todo}
      key={index}
    >
      <div key={item.id} onClick={() => completeItem(item.id)}>
        {item.text}
      </div>
      <div className={Todostyles.icons}>
        <RiCloseCircleLine
          onClick={() => deleteItem(item.id)}
          className={Todostyles.deleteIcon}
        />
        <BiEdit
          onClick={() => setUpdate({ id: item.id, value: item.text })}
          className={Todostyles.editIcon}
        />
      </div>
    </div>
  ))
}

export default Todo
