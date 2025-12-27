// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
//
import Grid from "@mui/material/Grid";
// Action Button
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
//
import IconButton from "@mui/material/IconButton";

import { TodosContext } from "../contexts/TodosContext";
import { useContext, useState } from "react";
// Dialog
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
//
import TextField from "@mui/material/TextField";

export default function Todo({ todo }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({
    title: todo.title,
    details: todo.details,
  });
  const { todos, setTodos } = useContext(TodosContext);
  // Event Handlers
  function handleCheckClick() {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
    );

    setTodos(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
  }

  //start Handle Delete Dailog
  function handleShowDialog() {
    setShowDeleteDialog(true);
  }

  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }

  function handleDeleteConfirm() {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
    localStorage.setItem("todo", JSON.stringify(newTodos));
  }
  //End Handle Delete Dailog
  function handleShowUpdateDialog() {
    setShowUpdateDialog(true);
  }

  function handleUpdateDialogClose() {
    setShowUpdateDialog(false);
  }

  function handleUpdateConfirm() {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? { ...t, title: updateTodo.title, details: updateTodo.details }
        : t
    );
    setTodos(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
    setShowUpdateDialog(false);
  }

  //start Handle Update Dailog

  //End Handle Update Dailog
  // ==== Event Handlers ===
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
            value={updateTodo.title}
            onChange={(e) =>
              setUpdateTodo({ ...updateTodo, title: e.target.value })
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
            value={updateTodo.details}
            onChange={(e) =>
              setUpdateTodo({ ...updateTodo, details: e.target.value })
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
      {/* Start Carde */}
      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          bgcolor: "#2A3592",
          transition: ".3s",
          mt: 5,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8} sx={{ textAlign: "right", color: "white" }}>
              <Typography variant="h5">{todo.title}</Typography>
              <Typography variant="h6">{todo.details}</Typography>
            </Grid>
            <Grid
              size={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Action Button */}
              {/* Check icon */}
              <IconButton
                onClick={() => {
                  handleCheckClick();
                }}
                className="iconButton"
                aria-label="CheckIcon"
                sx={{
                  bgcolor: todo.isCompleted ? "#8bc34a" : "white",
                  color: todo.isCompleted ? "white" : "#8bc34a",
                  border: "3px solid #8bc34a",
                }}
              >
                <CheckIcon />
              </IconButton>
              {/*== Check icon ==*/}

              {/* Update Icon */}
              <IconButton
                onClick={handleShowUpdateDialog}
                className="iconButton"
                aria-label="Edit"
                sx={{
                  bgcolor: "white",
                  color: "#1769aa",
                  border: "solid #1769aa",
                }}
              >
                <ModeEditOutlineOutlinedIcon />
              </IconButton>
              {/*== Update Icon ==*/}

              {/* Delete Icon */}
              <IconButton
                onClick={handleShowDialog}
                className="iconButton"
                aria-label="Delete"
                sx={{
                  bgcolor: "white",
                  color: "#b23c17",
                  border: "solid #b23c17",
                }}
              >
                <DeleteIcon />
              </IconButton>
              {/*=== Delete Icon ===*/}
              {/* == Action Button ==*/}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* End Carde */}
    </>
  );
}
