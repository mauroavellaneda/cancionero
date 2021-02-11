// import React, { useContext } from "react";
// import * as ReactBootStrap from "react-bootstrap";
// import { Context } from "../../context";
// import LyricCard from "./Track";

// const Tracks = () => {
//   const [state] = useContext(Context);
//   const { track_list, heading } = state;

//   if (track_list === undefined || track_list.length === 0) {
//     return <ReactBootStrap.Spinner animation="border" />;
//   } else {
//     return (
//       <>
//         <h3 className="text-center mb-4">{heading}</h3>
//         <div className="row">
//           {track_list.map((item) => (
//             <LyricCard key={item.track.track_id} track={item.track} />
//           ))}
//         </div>
//       </>
//     );
//   }
// };

// export default Tracks;
