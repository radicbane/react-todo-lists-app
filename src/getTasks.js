let items = JSON.parse(localStorage.getItem('todos'))

export function getTasks() {
  return items
}

export function getTask(id) {
  return items.find((item) => item.id === id)
}
