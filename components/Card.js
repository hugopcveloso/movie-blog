import React from 'react'

import styled from '@emotion/styled'
import Link from 'next/link'
function Card({ movie }) {
  const { API_URL } = process.env

  if (!movie.genre) {
    movie.genre = {}
    movie.genre.slug = 'uncategorized'
  }

  return (
    <CardStyled>
      <div className="poster">
        {movie.poster && (
          <img
            className="card-image"
            src={API_URL + movie.poster.url}
            alt={`${movie.title} poster`}
          />
        )}
      </div>
      <div className="body">
        <h3>{movie.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.description }} />
      </div>
      <Link
        href="/movies/[genre]/[slug]"
        as={`/movies/${movie.genre.slug}/${movie.slug}`}
      >
        <a>More about this movie</a>
      </Link>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  .body {
    padding: 10px;
  }
  .card-image {
    width: 100%;
    height: 40vw;
    object-fit: cover;
  }
  a {
    padding: 10px;
    display: inline-block;
    margin: 20px 0;
  }
`
export default Card
