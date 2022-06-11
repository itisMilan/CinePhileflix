import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import "./RowPost.css";
import axios from "../../axios.js";
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState();
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id) => {
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
       
          setUrlId(response.data.results[0]);
       
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => {
              handleMovie(obj.id);
            }}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
