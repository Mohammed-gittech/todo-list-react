import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        direction: "rtl",
        backgroundColor: "#191B1E",
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
