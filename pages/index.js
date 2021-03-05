import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import { Flex, Box } from 'reflexbox'
import styled from '@emotion/styled'

const Home = ({ movies }) => {
  return (
    <HomeStyled className="container">
      <Box my={40} as="h2">
        Latest Movies
      </Box>
      <Flex
        justifyContent="space-between"
        flexDirection={{ _: 'column', 1: 'row', 2: 'row' }}
      >
        {movies.map(movie => (
          <Box key={movie.id} width={{ _: '100%', 1: '30%' }}>
            <Card movie={movie} />
          </Box>
        ))}
      </Flex>
    </HomeStyled>
  )
}

const HomeStyled = styled.div``

export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/movies`)
  const data = await res.json()

  return {
    props: {
      movies: data
    }
  }
}

export default Home
