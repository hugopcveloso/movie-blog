import React from 'react'

import styled from '@emotion/styled'
import Link from 'next/link'
import theme from '../theme/theme'

export interface CardProps {
  movie: {
    title: string
    genre: {
      slug?: string
    }
    slug: string
    poster: {
      url: string
    }
    description: string
  }
}

function Card({ movie }: CardProps) {
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
    object-fit: cover;
    ${theme.mq[0]} {
      height: 30vh;
    }
    ${theme.mq[2]} {
      height: 40vh;
    }
  }
  a {
    padding: 10px;
    display: inline-block;
    margin: 20px 0;
  }
`
export default Card