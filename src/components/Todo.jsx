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

import { useTodos } from "../contexts/TodosContext";
import { useToast } from "../contexts/ToastContext";

export default function Todo({ todo, showDelete, showUpdate }) {
  const { dispatch } = useTodos();
  const { showHideToast } = useToast();
  // Event Handlers
  function handleCheckClick() {
    dispatch({ type: "checked", payload: todo });
    showHideToast("تم التعديل بنجاح");
  }

  //start Handle Delete Dailog
  function showDeleteDialog() {
    showDelete(todo);
  }
  //End Handle Delete Dailog

  //start Handle Update Dailog
  function handleShowUpdateDialog() {
    showUpdate(todo);
  }
  //End Handle Update Dailog
  // ==== Event Handlers ===
  return (
    <>
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
              <Typography
                sx={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
                variant="h5"
              >
                {todo.title}
              </Typography>
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
                onClick={showDeleteDialog}
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
