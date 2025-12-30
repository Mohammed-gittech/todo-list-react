import { useReducer } from "react";
import { TodosContext } from "../contexts/TodosContext";
import todosReducer from "../reducer/todoReducer";

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
