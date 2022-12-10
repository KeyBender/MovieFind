import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Nav(props){

    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate(`/search/${keyword}`)
    }

    return(
        <nav className="flex p-4 mb-6 bg-gray-900">
            <Link to ="/"><h1 className= "text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-sky-500 to-orange-700">MF</h1></Link>
            <form onSubmit={handleSubmit} className="flex mx-auto">
                <input type="text" onChange={(e)=> setKeyword(e.target.value)} className="rounded bg-gray-300 focus:bg-white transition ease-out text-center text-lg"/>
                <button className="rounded bg-sky-300 text-center ml-3 px-3 font-bold hover:bg-sky-500 transition ease-out hover:shadow-md shadow-indigo-500/50">Search</button>
            </form>
        </nav>
    )
}