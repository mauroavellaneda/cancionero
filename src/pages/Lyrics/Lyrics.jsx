// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const Lyrics = (props) => {
// //   const [track, setTrack] = useState({});
// //   const [lyrics, setLyrics] = useState({});

// //   useEffect(() => {
// //     axios
// //       .get(
// //         `https://cors-access-allow.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MUSICXMAX_API}`
// //       )
// //       .then((res) => {
// //         debugger;
// //         console.log(res);
// //         // setState({
// //         //   track_list: res.data.message.body.track_list,
// //         //   heading: "Top 10 Tracks",
// //         // });
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);

// //   return <div></div>;
// // };

// // export default Lyrics;

// // import React, { Component } from "react";
// // import axios from "axios";

// // class Lyrics extends Component {
// //   state = {
// //     track: {},
// //     lyrics: {},
// //   };

// //   componentDidMount() {
// //     axios
// //       .get(
// //         `https://cors-access-allow.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MUSICXMAX_API}`
// //       )
// //       .then((res) => {
// //         console.log(res.data);
// //         // setState({
// //         //   track_list: res.data.message.body.track_list,
// //         //   heading: "Top 10 Tracks",
// //         // });
// //       })
// //       .catch((err) => console.log(err));
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <h1>lyrics</h1>
// //       </div>
// //     );
// //   }
// // }
// // export default Lyrics;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// // import Spinner from "../layout/Spinner";
// // import Moment from "react-moment";

// const Lyrics = (props) => {
//   const [track, setTrack] = useState({});
//   const [lyrics, setLyrics] = useState({});

//   useEffect(() => {
//     axios
//       .get(
//         `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
//       )
//       .then((res) => {
//         let lyrics = res.data.message.body.lyrics;
//         setLyrics({ lyrics });

//         return axios.get(
//           `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
//         );
//       })
//       .then((res) => {
//         let track = res.data.message.body.track;
//         setTrack({ track });
//       })
//       .catch((err) => console.log(err));
//   }, [props.match.params.id]);

//   if (
//     track === undefined ||
//     lyrics === undefined ||
//     Object.keys(track).length === 0 ||
//     Object.keys(lyrics).length === 0
//   ) {
//     return <h1></h1>
//   } else {
//     return (
//       <>
//         <Link to="/" className="btn btn-dark btn-sm mb-4">
//           Go Back
//         </Link>
//         <div className="card">
//           <h5 className="card-header">
//             {track.track.track_name} by{" "}
//             <span className="text-secondary">{track.track.artist_name}</span>
//           </h5>
//           <div className="card-body">
//             <p className="card-text">{lyrics.lyrics.lyrics_body}</p>
//           </div>
//         </div>

//         <ul className="list-group mt-3">
//           <li className="list-group-item">
//             <strong>Album ID</strong>: {track.track.album_id}
//           </li>
//           <li className="list-group-item">
//             <strong>Song Genre</strong>:{" "}
//             {track.track.primary_genres.music_genre_list.length === 0
//               ? "NO GENRE AVAILABLE"
//               : track.track.primary_genres.music_genre_list[0].music_genre
//                   .music_genre_name}
//           </li>
//           <li className="list-group-item">
//             <strong>Explicit Words</strong>:{" "}
//             {track.track.explicit === 0 ? "No" : "Yes"}
//           </li>
//           <li className="list-group-item">
//             <strong>Release Date</strong>:{" "}
//             {/* <Moment format="MM/DD/YYYY">
//               {track.track.first_release_date}
//             </Moment> */}
//           </li>
//         </ul>
//       </>
//     );
//   }
// };

// export default Lyrics;

import React, { useState } from "react";
import { useEffect } from "react";
import getLyrics from "../../modules/fetchLyrics";
import Lyric from "./Lyric";
import "./Lyric.css";

const Lyrics = () => {
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
    <>
      <h3 className="lyric-title">Top 10 Canciones</h3>
      <div className="lyric-boxes">
        {lyrics.map((item) => (
          <Lyric key={item.track.track_id} track={item.track} />
        ))}
      </div>
    </>
  );
};

export default Lyrics;
