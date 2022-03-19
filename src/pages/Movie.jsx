import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Movie = ({movies}) => {

  const {id} = useParams()
  let movie = movies.filter(item => item.id === +id)[0]

  if(!movie) return <button className='btn loading'></button>

  console.log(id,movie)
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
        <div className="">
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <div class="badge badge-error gap-2 mt-2">{movie.vote_average} &#10029;</div>
            </div>
            <div className="divider"></div>
        <ul className='mt-5 flex flex-col gap-2'>
            <h1 className='text-2xl font-bold mb-2 text-succes'>About Movie</h1>
            <li>Original-Title: <strong>{movie.original_title}</strong></li>
            <li>Popularity: <strong>{movie.popularity}</strong></li>
            <li>Votes: <strong>{movie.vote_count}</strong></li>
            <li>Realise-date: <strong>{movie.release_date}</strong></li>
            <li>Language: <strong>{movie.original_language}</strong></li>
        </ul>
        <div className="divider mt-5"></div>
        <p className="text-lg">{movie.overview}</p>
    </div>
  </div>
</div>
    </div>
  )
}
