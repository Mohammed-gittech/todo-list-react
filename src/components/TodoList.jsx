import Container from "@mui/material/Container";
// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
//
import Divider from "@mui/material/Divider";
// Button
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function TodoList() {
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
        </CardContent>
      </Card>
      {/* End Carde */}
    </Container>
  );
}
