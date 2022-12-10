import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  /* {
      "name": "Breaking Bad",
      "relevance": 445.23,
      "type": "tv_series",
      "id": 3173903,
      "year": 2008,
      "result_type": "title",
      "tmdb_id": 1396,
      "tmdb_type": "tv",
      "image_url": "https://cdn.watchmode.com/posters/03173903_poster_w185.jpg"
    }, */

  const { movie } = props;

  console.log(movie);

  return (
    <div className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 flex justify-center w-60">
      <div className="rounded-lg shadow-lg bg-white max-w-xs">
        <Link to={`/view/${movie.id}`}>
          <img className="rounded-t-lg mx-auto" src={movie.image_url} alt="" />
        </Link>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {movie.name}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Type : {movie.tmdb_type}
          </p>
        </div>
      </div>
    </div>
  );
}
