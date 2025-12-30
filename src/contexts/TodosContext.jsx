import { createContext, useContext } from "react";

export const TodosContext = createContext([]);

export const useTodos = () => {
  return useContext(TodosContext);
};
