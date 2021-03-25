import getConfig from 'next/config'
import { Box, Flex } from 'reflexbox'
import Card from '../../components/Card'

export interface MovieProps {
  id: number
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
export interface Tag {
  tag: TagProps
}

export interface TagProps {
  tag_name: string
  movies: MovieProps[]
}

const Details = ({ tag }: Tag) => {
  return (
    <div className="container">
      <Box>
        <h1>{tag.tag_name}</h1>
      </Box>
      <Flex
        justifyContent="space-between"
        flexDirection={{ _: 'column', md: 'row', lg: 'row' }}
        mb={100}
        flexWrap="wrap"
      >
        {tag.movies.map((movie: MovieProps) => {
          return (
            <Box key={movie.id} width={{ _: '100%', 1: '30%' }}>
              <Card movie={movie} />
            </Box>
          )
        })}
      </Flex>
    </div>
  )
}
const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context: any) {
  const API_URL = process.env.API_URL
  const { tags } = context.query
  const res = await fetch(`${publicRuntimeConfig.API_URL}/tags/?slug=${tags}`)
  const data = await res.json()

  return {
    props: {
      tag: data[0],
    },
  }
}
export default Details