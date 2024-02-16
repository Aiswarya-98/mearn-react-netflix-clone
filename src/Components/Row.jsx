import React, { useEffect, useState } from "react"
import tmdbAxiosInstance from "../tmdbAxiosInstance"
import './row.css'


function Row({ title, fetchUrl ,isPoster}) {
  // console.log("fetchurl prop",fetchUrl);

  const [allmovies, setAllMovies] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/"

  const fetchData = async () => {
    const { data } = await tmdbAxiosInstance.get(fetchUrl)
    console.log("data",data);
    console.log("data retrieved",data.results);
    setAllMovies(data.results)
  }

  console.log("all movies",allmovies)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="movies-row">
        {allmovies?.map((item) => (
          <img className={`${isPoster && 'movie-posture'} movies`} src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`}  alt="noimg" />
        ))}
      </div>
    </div>
  )
}

export default Row
