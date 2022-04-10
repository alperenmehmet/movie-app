import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../constants/constants'
import { FaHeart } from 'react-icons/fa'

const SingleMovie = () => {
  const [movie, setMovie] = useState([])
  const { id } = useParams()

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `${BASE_URL}${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        const data = await response.json()
        setMovie(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovie()
  }, [id])

  console.log(movie)
  return (
    <div className="container">
      <div className="row row-cols-2 mt-5">
        <div className="col">
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            className="content-img"
          />
        </div>
        <div className="col">
          <h1 className="movie-title">{movie.title}</h1>
          <h2 className="movie-tagline">{movie.tagline}</h2>
          <div className="movie-subdata">
            <h5 className="rating">
              <FaHeart className="icon-movie-page" />
              {'                       '}
              {movie.vote_average}
            </h5>
            <h5 className="runtime-date">
              {movie.runtime}dk / {movie.release_date}
            </h5>
          </div>
          <div>
            <h3 className="movie-fields">the description</h3>
            <p className="movie-desc">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie
