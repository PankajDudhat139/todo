function DeletedTodos({ deletedTodos, restoreTodo }) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Deleted Todos</h2>
      <div className="space-y-3">
        {deletedTodos.map(todo => (
          <div 
            key={todo.id} 
            className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-gray-700">{todo.text}</span>
            <button 
              onClick={() => restoreTodo(todo.id)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Restore
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DeletedTodos