import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./toDoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
