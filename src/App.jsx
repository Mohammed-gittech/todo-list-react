import TodoList from "./components/TodoList";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";

import { TodosContext } from "./contexts/TodosContext";
import { useState } from "react";
import MySnackBar from "./components/MySnackBar";
//
import { ToastContext } from "./contexts/ToastContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
  palette: {
    primary: {
      main: "#4527a0",
    },
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
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function showHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }
  return (
    <ThemeProvider theme={theme}>
      <ToastContext.Provider value={{ showHideToast }}>
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
          <MySnackBar open={open} message={message} />
          <TodosContext.Provider value={{ todos, setTodos }}>
            <TodoList />
          </TodosContext.Provider>
        </div>
      </ToastContext.Provider>
    </ThemeProvider>
  );
}

export default App;
