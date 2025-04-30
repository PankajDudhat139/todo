import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addTodo, toggleTodo, deleteTodo } from './toDoSlice';
import { fetchTodos } from "./toDoSlice";

function TodoApp() {
  const [text, setText] = useState('');
  const { list, status, error } = useSelector((state) => state.todos);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className='hidden'>
      <h1>Redux To-Do App</h1>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Task</button>
      <ul>
                {status === "succeeded" &&
                  list.map((todo) => (
                    <li key={todo.id}>
                      {todo.title} {todo.completed ? "✅" : "❌"}
                    </li>
                  ))}
              </ul>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
