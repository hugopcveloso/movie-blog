export interface IMovie {
  movie: {
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
    my_rating: number
    imdb_rating: number
    rotten_rating: number
  }
}
