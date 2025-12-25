import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        direction: "ltr",
        backgroundColor: "#191B1E",
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
