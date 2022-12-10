import React from "react";
import { useState } from "react";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";

export default function MainPage(props) {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKeyword}`);
  };
  return (
    <div>
      <Nav />

      <div className="mt-10">
        <h1 className="text-center font-extrabold text-7xl first-letter:bg-clip-text first-letter:text-transparent first-letter:bg-gradient-to-tr first-letter:from-sky-500 first-letter:to-orange-700 ">
          Movie<span className="bg-clip-text text-transparent bg-gradient-to-tr from-sky-500 to-orange-700 ">F</span>ind
        </h1>
        <form onSubmit={handleSubmit} className="flex justify-center mt-16">
          <input
            type="text"
            placeholder="Search for any movie or tv show"
            onChange={(e) => setSearchKeyWord(e.target.value)}
            className="rounded bg-gray-300 focus:bg-white transition ease-out p-2 mr-2 w-72 text-center"
          />
        </form>
      </div>
    </div>
  );
}
