const BASE_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export const fetchTodosAPI = async () => {
  const response = await fetch(BASE_URL);
  return await response.json();
};
