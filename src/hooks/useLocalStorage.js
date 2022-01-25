import { useState } from 'react'

function useLocalStorage(todos, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(todos)

      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      window.localStorage.setItem(todos, JSON.stringify(valueToStore))
    } catch {}
  }

  return [storedValue, setValue]
}

export default useLocalStorage
