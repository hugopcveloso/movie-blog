import React from 'react'
import { IMovie } from './interfaces/interfaces'
import Image from 'next/image'
import styled from '@emotion/styled'

const Ratings = ({ movie }: IMovie) => {
  return (
    <RatingsContainer>
      <RatingItem>
        <Image
          src="/static/images/imdb-logo.png"
          alt="Picture of the author"
          width={40}
          height={40}
        />
        <p>{movie.imdb_rating}</p>
      </RatingItem>
      <RatingItem>
        <Image
          src="/static/images/rotten-logo.png"
          alt="Picture of the author"
          width={25}
          height={25}
        />
        <p>{movie.rotten_rating}</p>
      </RatingItem>
      <RatingItem>
        <Image
          src="/static/images/rotten-logo.png"
          alt="Picture of the author"
          width={25}
          height={25}
        />
        <p>{movie.my_rating}</p>
      </RatingItem>
    </RatingsContainer>
  )
}

export default Ratings

const RatingItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`

const RatingsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`
