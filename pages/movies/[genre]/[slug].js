import React from 'react'

import { Box, Flex } from 'reflexbox'
import getConfig from 'next/config'
import { NextSeo } from 'next-seo'

function Movie({ movie }) {
  const SEO = {
    title: `Next Movies | ${movie.title}`,
    description: `${movie.description}`,
    openGraph: {
      title: `Next Movies | ${movie.title}`,
      description: `${movie.description}`,
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Box className="container">
        <Box as="h2" my={40}>
          {movie.title}
        </Box>
        <Box maxWidth={600}>{movie.description}</Box>
      </Box>
    </>
  )
}

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
