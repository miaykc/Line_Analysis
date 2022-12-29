import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Maika from "./pics/Maika.png";
import Joanne from "./pics/Joanne.png";
import Mia from "./pics/Mia.png";
import "../styles.css";

export default function MediaCard() {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia sx={{ height: 250 }} image={Joanne} title="Joanne" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            紀柔安
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>學號：R11142005 </p>
            <p>Email: R11142005@ntu.edu.tw</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={Mia}
          title="Mia"
          direction="row"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            葉凱晴
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>學號：R11142006 </p>
            <p>Email: R11142006@ntu.edu.tw</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardMedia sx={{ height: 250 }} image={Maika} title="Maika" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            橘內每歌
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>學號：R11142010 </p>
            <p>Email: R11142010@ntu.edu.tw</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
