import { useState } from 'react'
import AddTodo from '../AddTodo'
import TodoList from '../TodoList'
import DeletedTodos from '../DeletedTodos'
import EditTodoDialog from '../EditTodoDialog'
import TodoApp from '../todoApp'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [deletedTodos, setDeletedTodos] = useState([])
  const [editingTodo, setEditingTodo] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      console.log('Logged in with email:', email)
      setLoggedIn(true)
    } else {
      console.log('Please enter email and password')
      alert('Please enter email and password')
      setLoggedIn(false)
    }
  }

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        pinned: false,
        completed: false
      }])
      setNewTodo('')
    }
  }

  const deleteTodo = (id) => {
    const todoToDelete = todos.find(todo => todo.id === id)
    setDeletedTodos([...deletedTodos, todoToDelete])
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const restoreTodo = (id) => {
    const todoToRestore = deletedTodos.find(todo => todo.id === id)
    setTodos([...todos, todoToRestore])
    setDeletedTodos(deletedTodos.filter(todo => todo.id !== id))
  }

  const togglePin = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, pinned: !todo.pinned } : todo
    ))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const startEdit = (todo) => {
    setEditingTodo(todo)
  }

  const saveEdit = () => {
    if (editingTodo) {
      setTodos(todos.map(todo =>
        todo.id === editingTodo.id ? editingTodo : todo
      ))
      setEditingTodo(null)
    }
  }

  const closeDialog = () => {
    setEditingTodo(null)
  }

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.pinned === b.pinned) return 0
    return a.pinned ? -1 : 1
  })

  return (
    <div className="todo-app">
        <div>
          <TodoApp />
          <h1>Todo List</h1>
          <AddTodo
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            addTodo={addTodo}
          />

          <TodoList
            todos={sortedTodos}
            toggleComplete={toggleComplete}
            togglePin={togglePin}
            startEdit={startEdit}
            deleteTodo={deleteTodo}
          />

          {deletedTodos.length > 0 && (
            <DeletedTodos
              deletedTodos={deletedTodos}
              restoreTodo={restoreTodo}
            />
          )}

          <EditTodoDialog
            editingTodo={editingTodo}
            setEditingTodo={setEditingTodo}
            saveEdit={saveEdit}
            closeDialog={closeDialog}
          />
        </div>
    </div>
  )
}

export default App
