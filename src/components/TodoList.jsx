import Container from "@mui/material/Container";
// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
//Divider
import Divider from "@mui/material/Divider";
// Button
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
//
import Todo from "./Todo";
//
import Grid from "@mui/material/Grid";
//
import TextField from "@mui/material/TextField";
// Others
import { v4 as uuidv4 } from "uuid";
// Use State
import { useState, useContext, useEffect } from "react";
import { TodosContext } from "../contexts/TodosContext";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  //   Handle display completed or not completed
  const completedTodos = todos.filter((t) => t.isCompleted);
  const notCompletedTodos = todos.filter((t) => !t.isCompleted);

  let todosToBeRendered = todos;

  if (displayedTodosType === "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType === "non-completed") {
    todosToBeRendered = notCompletedTodos;
  }
  //===  Handle display completed or not completed

  const todosJsx = todosToBeRendered.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todo"));
    setTodos(storageTodos);
  }, []);

  function changeDisplayedType(e) {
    setDisplayedTodosType(e.target.value);
  }

  function handleAddClick() {
    const newTodos = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };

    const updatedTodos = [...todos, newTodos];
    setTodos(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
    setTitleInput("");
  }

  return (
    <Container maxWidth="sm" style={{ textAlign: "center" }}>
      {/* Start Carde */}
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2">مهامي</Typography>
          <Divider />
          {/* Start Button */}
          <ToggleButtonGroup
            sx={{ mt: "30px", direction: "ltr", borderRadius: "20px" }}
            color="primary"
            value={displayedTodosType}
            onChange={changeDisplayedType}
            exclusive
            // onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="non-completed">غير المنجز</ToggleButton>
            <ToggleButton value="completed">المنجز</ToggleButton>
            <ToggleButton value="all">الكل</ToggleButton>
          </ToggleButtonGroup>
          {/* End Button */}

          {todosJsx}

          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid size={8}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
              />
            </Grid>
            <Grid size={4}>
              <Button
                sx={{ width: "100%", height: "100%" }}
                variant="contained"
                onClick={() => {
                  handleAddClick();
                }}
              >
                اضافة
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* End Carde */}
    </Container>
  );
}
