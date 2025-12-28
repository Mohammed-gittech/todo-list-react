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
import { useState, useContext, useEffect, useMemo } from "react";
import { TodosContext } from "../contexts/TodosContext";
// Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [dialogTodo, setDialogTodo] = useState({});

  //   Handle display completed or not completed
  const completedTodos = useMemo(() => {
    return todos.filter((t) => t.isCompleted);
  }, [todos]);
  const notCompletedTodos = useMemo(() => {
    return todos.filter((t) => !t.isCompleted);
  }, [todos]);

  let todosToBeRendered = todos;

  if (displayedTodosType === "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType === "non-completed") {
    todosToBeRendered = notCompletedTodos;
  }
  //===  Handle display completed or not completed

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todo")) ?? [];
    setTodos(storageTodos);
  }, []);

  //start Handle Delete Dailog
  function openShowDeleteDialog(todo) {
    setDialogTodo(todo);
    setShowDeleteDialog(true);
  }

  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }

  function handleDeleteConfirm() {
    const newTodos = todos.filter((t) => t.id !== dialogTodo.id);
    setTodos(newTodos);
    localStorage.setItem("todo", JSON.stringify(newTodos));
    setShowDeleteDialog(false);
  }
  //End Handle Delete Dailog

  //start Handle Update Dailog
  function openShowUpdateDialog(todo) {
    setDialogTodo(todo);
    setShowUpdateDialog(true);
  }

  function handleUpdateDialogClose() {
    setShowUpdateDialog(false);
  }

  function handleUpdateConfirm() {
    const updatedTodos = todos.map((t) =>
      t.id === dialogTodo.id
        ? { ...t, title: dialogTodo.title, details: dialogTodo.details }
        : t
    );
    setTodos(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
    setShowUpdateDialog(false);
  }
  //End Handle Update Dailog

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

  const todosJsx = todosToBeRendered.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        showDelete={openShowDeleteDialog}
        showUpdate={openShowUpdateDialog}
      />
    );
  });

  return (
    <>
      {/* Delete Dialog */}
      <Dialog
        sx={{ direction: "rtl" }}
        open={showDeleteDialog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"هل أنت متأكد من رغبتك في حذف المهمة؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            الا يمكنك التراجع عن الحذف بعد إتمامه
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>إغلاق</Button>
          <Button onClick={handleDeleteConfirm} autoFocus>
            نعم، قم بالحذف
          </Button>
        </DialogActions>
      </Dialog>
      {/*==== Delete Dialog ====*/}

      {/* Update Dailog */}
      <Dialog
        sx={{ direction: "rtl" }}
        open={showUpdateDialog}
        onClose={handleUpdateDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"تعديل المهمة"}</DialogTitle>
        <DialogContent>
          <TextField
            value={dialogTodo.title}
            onChange={(e) =>
              setDialogTodo({ ...dialogTodo, title: e.target.value })
            }
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="عنوان المهمة"
            fullWidth
            variant="standard"
          />
          <TextField
            value={dialogTodo.details}
            onChange={(e) =>
              setDialogTodo({ ...dialogTodo, details: e.target.value })
            }
            autoFocus
            required
            margin="dense"
            id="details"
            name="details"
            label="التفاصيل"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateDialogClose}>إغلاق</Button>
          <Button onClick={handleUpdateConfirm} autoFocus>
            تاكيد
          </Button>
        </DialogActions>
      </Dialog>
      {/* == Update Dailog == */}

      <Container maxWidth="sm" style={{ textAlign: "center" }}>
        {/* Start Carde */}
        <Card sx={{ minWidth: 275, maxHeight: "80vh", overflow: "scroll" }}>
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
                  disabled={titleInput.length == 0}
                >
                  اضافة
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {/* End Carde */}
      </Container>
    </>
  );
}
