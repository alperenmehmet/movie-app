import React from 'react'
import { useGlobalContext } from '../context'
import MovieCard from './MovieCard'
import { SearchMovie } from './SearchMovie'

export const MovieList = () => {
  const { movies } = useGlobalContext()

  return (
    <div className="container">
      <SearchMovie />
      <div className="row">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />
        })}
      </div>
    </div>
  )
}
