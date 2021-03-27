import React from 'react'
import Link from 'next/link'

import { Box, Flex } from 'reflexbox'
import getConfig from 'next/config'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styled from '@emotion/styled'
import theme from '../../../theme/theme'
import TagsMenu from 'components/TagsMenu'
import Ratings from 'components/Ratings'

function Movie({ movie }) {
  const API_URL = process.env.API_URL
  const SEO = {
    title: `Next Movies | ${movie.title}`,
    description: `${movie.description}`,
    openGraph: {
      title: `Next Movies | ${movie.title}`,
      description: `${movie.description}`,
    },
  }
  let imageLink
  if (process.env.NODE_ENV === 'development') {
    imageLink = API_URL + movie.poster.url
  } else {
    imageLink = movie.poster.url
  }

  const config = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    duration: 1,
  }
  console.log(movie)
  return (
    <motion.div
      transition={config}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ x: 0, opacity: 0 }}
    >
      <NextSeo {...SEO} />
      <MovieStyled className="container">
        <div className="movie__image">
          <img
            className="card-image"
            src={imageLink}
            alt={`${movie.title} poster`}
          />
        </div>

        <ContentStyled>
          {/* TODO:Criar um componente separado
            com os logos dos ratings e isso */}

          <div className="content__header">
            <h2>{movie.title}</h2>
            <span>{movie.release_date.split('-')[0]}</span>
          </div>
          <Ratings movie={movie} />
          <TagsMenu tags={movie.tags} />

          <Box maxWidth={600}>{movie.description}</Box>
        </ContentStyled>
      </MovieStyled>
    </motion.div>
  )
}

const MovieStyled = styled.div`
  display: flex;
  //mqbreakpoints = [360, 768, 1024, 1280, 1600]
  .content__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      margin-left: 30px;
    }
  }

  .card-image {
    width: 100%;
    object-fit: cover;
    height: 80vh;
  }
  ${theme.mq[1]} {
    justify-content: center;
    flex-wrap: wrap;
    .card-image {
      ${theme.mq[1]} {
        height: 70vh;
      }
    }
  }
`

const ContentStyled = styled.div`
  padding: 30px;
  .content__header {
    margin-bottom: 10px;
  }
`

const TagStyled = styled.div``

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {
  const { slug } = context.query

  const res = await fetch(`${publicRuntimeConfig.API_URL}/movies/?slug=${slug}`)
  const data = await res.json()

  return {
    props: {
      movie: data[0],
    },
  }
}

export default Movie
