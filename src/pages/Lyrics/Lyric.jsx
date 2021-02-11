import React from "react";
import { Link } from "react-router-dom";
import "./Lyric.css";

const Lyric = ({ track }) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h5>{track.artist_name}</h5>
          <p className="">
            <strong>
              <i className="">Canción</i>
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className=""></i>Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className=""
          >
            <i className=""></i> Ver Letra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lyric;
