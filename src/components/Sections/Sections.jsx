import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Artists from "../../pages/Artists/Artists";
import Lyrics from "../../pages/Lyrics/Lyrics";
import Chords from "../../pages/Chords/Chords";

const Sections = () => {
  return (
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/artists" component={Artists} exact />
        <Route path="/lyrics" component={Artists} exact />
        <Route path="/chords" component={Artists} exact />
      </Switch>
  );
};

export default Sections;
