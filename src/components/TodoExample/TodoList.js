import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className="mt-2"
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
)

const TodoList = ({ todos, toggleTodo }) => (
  <ul className="mt-3" style={{ flexDirection: 'column', width: '20vw' }}>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)