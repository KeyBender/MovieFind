import React from "react";
import { useState } from "react";
import Nav from "../components/Nav";
import MovieCard from "../components/MovieCard";

export default function MainPage(props){
    const {films} = props
    const [searchKeyword, setSearchKeyWord] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()

    }

    const movies = films.titles.filter(film=> film.tmdb_type === "movie")
    const tvShows = films.titles.filter(film=> film.tmdb_type === "tv")

    return(
        <div>
            <Nav/>

            <div>
                <h1>MovieFind</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search for any movie or tv show" onChange={e=> setSearchKeyWord(e.target.value)} />
                    <button>Submit</button>
                </form>
            </div>

            <div>
                <h1>Tv Shows</h1>
                {tvShows.forEach((tvShow)=> <MovieCard film = {tvShow}/>)}
            </div>

            <div>
                <h1>Movies</h1>
                {movies.forEach((movie)=> <MovieCard film = {movie}/>)}
            </div>
        </div>
    )
}