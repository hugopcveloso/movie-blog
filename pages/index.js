import React from 'react'
import Link from 'next/link'
import Card from 'components/Card'
import { Flex, Box } from 'reflexbox'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import TagsMenu from 'components/TagsMenu'
import { motion } from 'framer-motion'

const Home = ({ movies, tags }) => {
  let { t } = useTranslation()
  const config = {
    type: 'spring',
    damping: 100,
    stiffness: 100,
  }
  return (
    <HomeStyled as={motion.div} transition={config} className="container">
      <Box my={40} as="h2">
        {t('common:title')}
      </Box>
      <Box my={40}>
        <TagsMenu tags={tags} />
      </Box>

      <Flex
        justifyContent="space-between"
        flexDirection={{ _: 'column', md: 'row', lg: 'row' }}
        mb={100}
        flexWrap="wrap"
      >
        {/* TODO: http://localhost:1337/movies?_sort=title:DESC
        
        */}
        {movies.map(movie => (
          <Box as={motion.div} key={movie.id} width={{ _: '100%', 1: '30%' }}>
            <Card movie={movie} />
          </Box>
        ))}
      </Flex>
    </HomeStyled>
  )
}

const HomeStyled = styled.div``

export async function getServerSideProps() {
  const API_URL = process.env.API_URL
  const res = await fetch(`${API_URL}/movies`)
  const data = await res.json()

  const fetchTags = await fetch(`${API_URL}/tags`)
  const tagsData = await fetchTags.json()

  return {
    props: {
      movies: data,
      tags: tagsData,
    },
  }
}

export default Home
