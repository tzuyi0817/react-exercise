import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'
import { deleteTodo } from '../../actions'

const deleteBtn = {
  float: 'right'
}

const Todo = ({ onClick, completed, text, onDelete }) => (
  <div className="todo-list">
    <button type="click" className="btn btn-sm btn-danger" style={deleteBtn} onClick={onDelete}>x</button>
    <li
      onClick={onClick}
      className="mt-2"
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        border: 'none'
      }}
    >
      {text}
    </li>
  </div>
)

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ul className="mt-3" style={{ flexDirection: 'column', width: '20vw' }}>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} onDelete={() => deleteTodo(todo.id)} />
    ))}
  </ul>
)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)