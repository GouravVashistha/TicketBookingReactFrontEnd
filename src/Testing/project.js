import { useState } from "react"

function Project() {
    const [movieId, setMovieId] = useState()
    const [movieName, setMovieName] = useState("")


    return <div> Welcome Show!!!
        <button onClick={() => {
            setMovieId(1)
        }}> View Movie Id </button>
        {movieId}

        <button onClick={() => {
            setMovieName("KGF")
        }}> View Movie Name </button>
        {movieName}


    </div>
}
export default Project
