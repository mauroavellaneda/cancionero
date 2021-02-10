import React from "react";
import { Consumer } from "../../context";
import * as ReactBootStrap from "react-bootstrap";
import Lyric from "./Lyric";

const Lyrics = () => {
  return (
    <Consumer>
      {(value) => {
        const { track_list, heading } = value;
        if (track_list === undefined || track_list.length === 0) {
          return <ReactBootStrap.Spinner animation="border" />;
        } else {
          return (
            <React.Fragment>
              <h3 className="text-center mb-4">{heading}</h3>
              <div className="row">
                {track_list.map((item) => {
                  <Lyric />;
                })}
              </div>
            </React.Fragment>
          );
        }
      }}
    </Consumer>
  );
};

export default Lyrics;
