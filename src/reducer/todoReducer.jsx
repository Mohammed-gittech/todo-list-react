import { v4 as uuidv4 } from "uuid";

export default function todosReducer(currentTodos, action) {
  switch (action.type) {
    case "added": {
      const newTodos = {
        id: uuidv4(),
        title: action.payload.newTitle,
        details: "",
        isCompleted: false,
      };

      const updatedTodos = [...currentTodos, newTodos];

      localStorage.setItem("todo", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "deleted": {
      const updateTodos = currentTodos.filter(
        (t) => t.id !== action.payload.id
      );
      localStorage.setItem("todo", JSON.stringify(updateTodos));
      return updateTodos;
    }
    case "updated": {
      const updatedTodos = currentTodos.map((t) =>
        t.id === action.payload.id
          ? {
              ...t,
              title: action.payload.title,
              details: action.payload.details,
            }
          : t
      );
      localStorage.setItem("todo", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "checked": {
      const updatedTodos = currentTodos.map((t) =>
        t.id === action.payload.id ? { ...t, isCompleted: !t.isCompleted } : t
      );

      localStorage.setItem("todo", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "getStorage": {
      const storageTodos = JSON.parse(localStorage.getItem("todo")) ?? [];
      return storageTodos;
    }

    default:
      throw Error("Unknown Action " + action.type);
  }
}
