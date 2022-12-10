import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios"
import MainPage from "./views/MainPage";
import SearchPage from "./views/SearchPage";
import ViewPage from "./views/ViewPage";
import './index.css'

function App(props) {

  const [sourcesLogos, setSourcesLogos] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/api/watchmode/init')
      .then(res => {
        let placeholderArray = []
        res.data.forEach((source)=>{
          placeholderArray.push({
            name : source.name,
            logo : source.logo_100px
          })

          setSourcesLogos(placeholderArray)
        })
      })
      .catch(err=> console.log(err))
  },[])

  console.log(sourcesLogos)

  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/search/:keyword" element={<SearchPage/>}/>
      <Route path="/view/:id" element={<ViewPage logos = {sourcesLogos}/>}/>
    </Routes>
  );
}

export default App;
