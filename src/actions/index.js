let nextTodoId = 0

export const addTodo = text => ({
  type: 'Add_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})