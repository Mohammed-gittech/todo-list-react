import TodoList from "./components/TodoList";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";

import { TodosContext } from "./contexts/TodosContext";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
});

let todoList = [
  {
    id: uuidv4(),
    title: "كتاب",
    details: "مهاميمهاميمهاميمهامي",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "مجله",
    details: "مهاميمهاميمهاميمهامي",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "مقاله",
    details: "مهاميمهاميمهاميمهامي",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(todoList);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          direction: "rtl",
          backgroundColor: "#191B1E",
          fontFamily: "Alexandria",
          fontWeight: "bold",
        }}
      >
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
