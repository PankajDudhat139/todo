function TodoList({ todos, toggleComplete, togglePin, startEdit, deleteTodo }) {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Active Todos</h2>
      {todos.map(todo => (
        <div
          key={todo.id}
          className={`flex items-center justify-between p-3 mb-2 rounded-lg shadow ${
            todo.completed ? 'bg-gray-50' : ''
          } ${todo.pinned ? 'border-l-4 border-r-4 bg-blue-50 border-blue-500' : 'bg-white'}`}
        >
          <div className="flex items-center flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="w-4 h-4 mr-3 rounded border-gray-300 focus:ring-blue-500"
            />
            <span
              className={`flex-1 ${
                todo.completed ? 'line-through text-gray-500' : 'text-black-800'
              }`}
            >
              {todo.text}
            </span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => togglePin(todo.id)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              {todo.pinned ? '📌' : '📍'}
            </button>
            <button
              onClick={() => startEdit(todo)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              ✏️
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-1 hover:bg-gray-100 rounded text-red-600"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList