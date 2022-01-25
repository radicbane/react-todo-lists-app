import React, { useState, useEffect, useRef } from 'react'
import TodoFormstyles from './TodoForm.module.css'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  })

  const onChange = (e) => {
    setInput(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    })
    setInput('')
  }

  return (
    <form onSubmit={onSubmit} className={TodoFormstyles.form}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={onChange}
            name="text"
            ref={inputRef}
            className={TodoFormstyles.input}
          />
          <button onClick={onSubmit} className={TodoFormstyles.button}>
            UPDATE
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={onChange}
            name="text"
            className={TodoFormstyles.input}
            ref={inputRef}
          />
          <button onClick={onSubmit} className={TodoFormstyles.button}>
            ADD
          </button>
        </>
      )}
    </form>
  )
}

export default TodoForm
