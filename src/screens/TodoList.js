import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import useLocalStorage from '../hooks/useLocalStorage'
import TodoListstyles from './TodoList.module.css'
import { useParams } from 'react-router-dom'
import { getTask } from '../getTasks'

function TodoList() {
  const [items, setItems] = useLocalStorage('items', [])

  const params = useParams()
  const todoItem = getTask(params.id)
  console.log(todoItem)

  const addItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return
    }
    const newItems = [item, ...items]
    setItems(newItems)
  }

  const updateItem = (itemId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    )
  }

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const completeItem = (id) => {
    let updateditems = items.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete
      }
      return item
    })
    setItems(updateditems)
  }

  return (
    <div className={TodoListstyles.container}>
      {todoItem?.text}
      <TodoForm onSubmit={addItem} />
      <Todo
        items={items}
        deleteItem={deleteItem}
        updateItem={updateItem}
        completeItem={completeItem}
      />
    </div>
  )
}

export default TodoList
