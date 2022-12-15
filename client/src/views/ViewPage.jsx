import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import LoadingSkelly from "../components/LoadingSkelly";
import wave from '../layered-waves-haikei.svg'

export default function ViewPage(props) {
  const { id } = useParams();
  const [film, setFillm] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { logos } = props;

  useEffect(() => {
    axios.get(`http://localhost:5000/api/watchmode/id/${id}`).then((res) => {
      setFillm(res.data);
      setLoaded(true);
    });
  }, [id]);
  return (
    <div>
      <Nav />
      {!loaded && <LoadingSkelly/>}
      {loaded && (
        <div className="mx-auto">
          <img src={`${film.poster}`} alt="" className="mx-auto"/>
          <h1 className="text-center font-extrabold text-3xl my-5">{film.title}</h1>
          <p className="text-center max-w-2xl mx-auto my-3 p-5">{film.plot_overview}</p>
          <h3 className="text-center underline-offset-4 underline mb-4">Streaming Services</h3>
          <div className="flex gap-5 p-6 justify-center h-96 bg-white/50" style={{
            backgroundImage : `url(${wave})`,
             
          }}>
          {film.sources.filter((source)=> source.type === "sub").map((source) => {
            return (
              <a href={source.web_url}>
                {logos
                  .filter((logo) => logo.name === source.name)
                  .map((logo) => {
                    return <img src={logo.logo} alt={logo.name} className="rounded-lg shadow-lg shadow-black"/>;
                  })}
              </a>
            );
          })}
          </div>
        </div>
      )}
    </div>
  );
}
