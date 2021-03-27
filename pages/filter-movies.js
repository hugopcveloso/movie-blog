import React, { useState } from 'react'
import { Flex, Box } from 'reflexbox'
import Select from 'react-select'
import { useQuery, useQueryClient } from 'react-query'

const { API_URL } = process.env

const getMovies = async key => {
  const genreId = key.queryKey[1].genre?.id
  const actorsIds = key.queryKey[2].actors.map(id => {
    return `actors.id=${id}`
  })
  const actorsQueryString = actorsIds.join('&')
  // & -> OR
  // $ -> AND

  if (genreId && actorsQueryString) {
    const res = await fetch(
      `${API_URL}/movies?genre.id=${genreId}&${actorsQueryString}`
    )
    const data = await res.json()
    return data
  }

  if (genreId) {
    const res = await fetch(`${API_URL}/movies?genre.id=${genreId}`)
    const data = await res.json()
    return data
  }

  if (actorsQueryString) {
    const res = await fetch(`${API_URL}/movies?${actorsQueryString}`)
    return res.json()
  }

  const res = await fetch(`${API_URL}/movies`)
  return res.json()
}

const FilterMovies = ({ movies, actors, genres }) => {
  const [genreId, setGenreId] = useState(null)
  const [actorsIds, setActorsIds] = useState([])

  const queryClient = useQueryClient()

  const { data, status } = useQuery(
    ['movies', { genre: genreId }, { actors: actorsIds }],
    getMovies,
    {
      initialData: movies,
    }
  )

  return (
    <Box className="container">
      <Box as="h2" my={40}>
        {' '}
        Filter movies
      </Box>
      <Flex mb={100}>
        <Box width={200} mr={20}>
          Filters go here
          <Select
            getOptionLabel={option =>
              `${option.first_name} ${option.last_name}`
            }
            getOptionValue={option => option.id}
            options={actors}
            instanceId="actors"
            isMulti
            placeholder="Filter by Actors"
            onChange={values => setActorsIds(values.map(actor => actor.id))}
          />
          <br />
          <Select
            getOptionLabel={option => option.title}
            getOptionValue={option => option.id}
            options={genres}
            // isMulti
            instanceId="genres"
            isClearable
            placeholder="Filter by Genre"
            onChange={value => setGenreId(value)}
          />
        </Box>
        <Box>
          {status === 'loading' && <div>Loading movies</div>}
          {status === 'error' && <div>Something went wrong</div>}
          {status == 'success' &&
            data.map(movie => {
              return (
                <Box key={movie.id} p={10}>
                  <strong>{movie.title}</strong> -{' '}
                  {movie.genre ? movie.genre.title : null}
                  <br />
                  {movie.actors.length > 0 &&
                    movie.actors.map(actor => {
                      return (
                        <small key={actor.id}>
                          {actor.first_name} {actor.last_name} &nbsp;
                        </small>
                      )
                    })}
                </Box>
              )
            })}
        </Box>
      </Flex>
    </Box>
  )
}

export async function getServerSideProps() {
  const resMovies = await fetch(`${API_URL}/movies`)
  const moviesData = await resMovies.json()

  const resActors = await fetch(`${API_URL}/actors`)
  const actorsData = await resActors.json()

  const resGenres = await fetch(`${API_URL}/genres`)
  const genresData = await resGenres.json()

  return {
    props: {
      movies: moviesData,
      actors: actorsData,
      genres: genresData,
    },
  }
}

export default FilterMovies
