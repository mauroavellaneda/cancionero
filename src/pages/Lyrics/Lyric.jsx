import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Divider, makeStyles } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    spacing: 10,
  },
  list: {
    padding: "20px",
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const Lyric = ({ track }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={track.artist_name} className={classes.header} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h5" align="center">
          {track.track_name}
        </Typography>
        <div className={classes.list}>
          <Typography align="center">Canción: {track.track_name}</Typography>
          <Typography align="center">Álbum: {track.album_name}</Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button variant="contained" color="primary" className={classes.button}>
          <Link to={`lyrics/track/${track.track_id}`}>Ver Letra</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Lyric;
