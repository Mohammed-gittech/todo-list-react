import Container from "@mui/material/Container";
// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
//Divider
import Divider from "@mui/material/Divider";
// Button
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
//
import Todo from "./Todo";
//
import Grid from "@mui/material/Grid";
//
import TextField from "@mui/material/TextField";
// Others
import { v4 as uuidv4 } from "uuid";
// Use State
import { useState } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { useContext } from "react";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);

  const [titleInput, setTitleInput] = useState("");

  const todosJsx = todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });

  function handleAddClick() {
    const newTodos = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };

    setTodos([...todos, newTodos]);
  }

  return (
    <Container maxWidth="sm" style={{ textAlign: "center" }}>
      {/* Start Carde */}
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2">مهامي</Typography>
          <Divider />
          {/* Start Button */}
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            sx={{ mt: "30px", direction: "ltr", borderRadius: "20px" }}
          >
            <Button>غير المنجز</Button>
            <Button>المنجز</Button>
            <Button>الكل</Button>
          </ButtonGroup>
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
