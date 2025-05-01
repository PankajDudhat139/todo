import { useState } from "react";
import AddTodo from "../AddTodo";
import TodoList from "../TodoList";
import DeletedTodos from "../DeletedTodos";
import EditTodoDialog from "../EditTodoDialog";
import TodoApp from "../todoApp";

function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);


  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          pinned: false,
          completed: false,
        },
      ]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    const todoToDelete = todos.find((todo) => todo.id === id);
    setDeletedTodos([...deletedTodos, todoToDelete]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const restoreTodo = (id) => {
    const todoToRestore = deletedTodos.find((todo) => todo.id === id);
    setTodos([...todos, todoToRestore]);
    setDeletedTodos(deletedTodos.filter((todo) => todo.id !== id));
  };

  const togglePin = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, pinned: !todo.pinned } : todo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (todo) => {
    setEditingTodo(todo);
  };

  const saveEdit = () => {
    if (editingTodo) {
      setTodos(
        todos.map((todo) => (todo.id === editingTodo.id ? editingTodo : todo))
      );
      setEditingTodo(null);
    }
  };

  const closeDialog = () => {
    setEditingTodo(null);
  };

  const sortedTodos = [...todos].sort((a, b) => {
    if (a.pinned === b.pinned) return 0;
    return a.pinned ? -1 : 1;
  });

  return (
    <div className="todo-app mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div>
        <TodoApp />
        <h1 className="px-5 text-xl font-bold mt-3">Todo List</h1>
        <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />

        <TodoList
          todos={sortedTodos}
          toggleComplete={toggleComplete}
          togglePin={togglePin}
          startEdit={startEdit}
          deleteTodo={deleteTodo}
        />

        {deletedTodos.length > 0 && (
          <DeletedTodos deletedTodos={deletedTodos} restoreTodo={restoreTodo} />
        )}

        <EditTodoDialog
          editingTodo={editingTodo}
          setEditingTodo={setEditingTodo}
          saveEdit={saveEdit}
          closeDialog={closeDialog}
        />
      </div>
    </div>
  );
}

export default Home;
