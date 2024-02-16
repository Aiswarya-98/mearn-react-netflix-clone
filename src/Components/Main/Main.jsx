import React from "react"
import Banner from "../Banner"
import requests from "../../requests"
import Row from "../Row"
import Nav from "../Nav"


function Main() {
  return (
    <>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row isPoster={true} title=" NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title=" Trending in India" fetchUrl={requests.fetchTrending} />
      <Row title=" Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title=" Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title=" Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title=" Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title=" Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title=" Documentries" fetchUrl={requests.fetchDocumentaries} />
    </>
  )
}

export default Main
