import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios"
import MainPage from "./views/MainPage";

function App(props) {
  const [films, setFilms] = useState({})

  const backendFilmPopulate = ()=>{
    axios.get("http://localhost:5000/api/watchmode/init")
              .then(res=>{
                console.log(res.data)
                return res.data
              })
              .catch(err=> console.log(err))
  }
  
  useEffect(()=>{
    setFilms(backendFilmPopulate())
  },[])

  return (
    <Routes>
      <Route element={<MainPage films = {films}/>}/>
    </Routes>
  );
}

export default App;
