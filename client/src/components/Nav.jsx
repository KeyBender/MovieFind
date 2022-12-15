import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav(props) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
  };

  return (
    <nav className="flex p-4 mb-6 bg-gray-900">
      <Link to="/">
        <h1 className="lg:text-5xl text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-sky-500 to-orange-700">
          MF
        </h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex mx-auto">
        <input
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
          className="rounded-l-full bg-gray-300 focus:bg-white focus:border-none transition ease-out text-center lg:text-lg w-40 lg:w-auto"
        />
        <button className="rounded-r-full bg-gray-300 text-centerpx-3 px-2 mr-10 font-bold hover:bg-sky-500 transition ease-out hover:shadow-md shadow-indigo-500/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    </nav>
  );
}
