import React, { useState } from "react";
import { useEffect } from "react";
import getLyrics from "../../modules/fetchLyrics";
import Lyric from "./Lyric";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Lyrics = () => {
  const classes = useStyles();
  const [lyrics, setLyrics] = useState([]);

  const loadLyrics = async () => {
    const res = await getLyrics();
    setLyrics(res.data.message.body.track_list);
    console.log(res);
  };

  useEffect(() => {
    loadLyrics();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Top 10 Canciones</Paper>
        </Grid>
        {lyrics.map((item) => (
          <Grid item xs={12} md={6}>
            <Lyric key={item.track.track_id} track={item.track} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Lyrics;
