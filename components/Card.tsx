import React from 'react'

import styled from '@emotion/styled'
import Link from 'next/link'
import theme from '../theme/theme'
import Ratings from './Ratings'
import { IMovie } from './interfaces/interfaces'

function Card({ movie }: IMovie) {
  const API_URL = process.env.API_URL

  if (!movie.genre) {
    movie.genre = {}
    movie.genre.slug = 'uncategorized'
  }
  let imageLink
  if (process.env.NODE_ENV === 'development') {
    imageLink = API_URL + movie.poster.url
  } else {
    imageLink = movie.poster.url
  }
  return (
    <CardStyled>
      <div className="poster">
        {movie.poster && (
          <img
            className="card-image"
            src={imageLink}
            alt={`${movie.title} poster`}
          />
        )}
      </div>
      {movie.my_rating && (
        <div className="ratings__container">
          <Ratings movie={movie} />
        </div>
      )}

      <div className="body">
        <h3>{movie.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: movie.description }} />
      </div>
      <Link
        href="/movies/[genre]/[slug]"
        as={`/movies/${movie.genre.slug}/${movie.slug}`}
        scroll={false}
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
  .ratings__container {
    padding-left: 20px;
    padding-right: 20px;
  }
  .body {
    padding: 10px;
    p {
      height: 125px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .card-image {
    width: 100%;
    object-fit: cover;
    height: 50vh;
    ${theme.mq[0]} {
      height: 30vh;
    }
    ${theme.mq[2]} {
      height: 60vh;
    }
  }
  a {
    padding: 10px;
    display: inline-block;
    margin: 20px 0;
  }
`
export default Card
