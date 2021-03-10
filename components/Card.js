import React from 'react'

import styled from '@emotion/styled'
import Link from 'next/link'
function Card({ movie }) {
  const { API_URL } = process.env
  return (
    <CardStyled>
      <div className="poster">
        <img
          className="card-image"
          src={API_URL + movie.poster.url}
          alt={`${movie.title} poster`}
        />
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
  .card-image {
    width: 100%;
    height: 40vw;
    object-fit: cover;
  }
  a {
    display: inline-block;
    margin: 20px 0;
  }
`
export default Card
