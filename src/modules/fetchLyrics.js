import axios from "axios";

const getLyrics = async () => {
  return await axios.get(
    `https://cors-access-allow.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=ar&f_has_lyrics=1&apikey=${process.env.REACT_APP_MUSICXMAX_API}`
  );
};

export default getLyrics;
