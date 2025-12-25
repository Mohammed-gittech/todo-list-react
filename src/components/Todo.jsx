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

export default function Todo() {
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
              <Typography variant="h5">مهامي</Typography>
              <Typography variant="h6">
                التفاصيل الخاصة بالمهمة الاولى
              </Typography>
            </Grid>
            <Grid
              size={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Action Button */}
              <IconButton
                className="iconButton"
                aria-label="CheckIcon"
                sx={{
                  bgcolor: "white",
                  color: "green",
                  border: "3px solid green",
                }}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
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
              <IconButton
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
              {/* == Action Button ==*/}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* End Carde */}
    </>
  );
}
