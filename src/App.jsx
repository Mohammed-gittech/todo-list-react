import TodoList from "./components/TodoList";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
});

function App() {
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
        <TodoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
