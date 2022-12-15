import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Nav from "../components/Nav";
import LoadingSkelly from "../components/LoadingSkelly";

const SearchPage = (props) => {
  const { keyword } = useParams();
  const [films, setFilms] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/watchmode/search/${keyword}`)
      .then((res) => {
        setFilms(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [keyword]);

  console.log(films);

  return (
    <div>
      <Nav />
      <div className="p-6 flex-col justify-center text-center ">
        <h1 className="mb-4">Search Results for "{keyword}"</h1>
        {!loaded && <LoadingSkelly />}
        <div className="inline-grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-center gap-3">
          {loaded && films.map((film) => <MovieCard movie={film} />)}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
