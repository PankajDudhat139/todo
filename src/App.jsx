import { useState } from 'react'
import './App.css'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import DeletedTodos from './DeletedTodos'
import EditTodoDialog from './EditTodoDialog'
import TodoApp from './todoApp'

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
      {loggedIn ? (
        <div>
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
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
          <TodoApp />
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
