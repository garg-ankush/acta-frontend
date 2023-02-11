import { getMovies } from "@/lib/mongo/movies"
import Article from './Article'

async function fetchMovies() {
  // const {movies} = await getMovies()
  // if (!movies) throw new Error("Failed to fetch movies")

  const movies = [
    {
      "_id": "1234",
      "title": "Batman",
      "fullplot": "This movies is about Batman. He is working to protect the city of Gotham."
    },
    {
      "_id": "1234",
      "title": "Good Will Hunting",
      "fullplot": "This movie is about a troubled genius solving math problems while working as a janitor."
    },
    {
      "_id": "1234",
      "title": "Rat Movie",
      "fullplot": "This movie is about a rat who loves to cook Italian food."
    },
    {
      "_id": "1234",
      "title": "Batman",
      "fullplot": "This movies is about Batman. He is working to protect the city of Gotham."
    },
    {
      "_id": "1234",
      "title": "Good Will Hunting",
      "fullplot": "This movie is about a troubled genius solving math problems while working as a janitor."
    },
    {
      "_id": "1234",
      "title": "Rat Movie",
      "fullplot": "This movie is about a rat who loves to cook Italian food."
    },
    {
      "_id": "1234",
      "title": "Batman",
      "fullplot": "This movies is about Batman. He is working to protect the city of Gotham."
    },
    {
      "_id": "1234",
      "title": "Good Will Hunting",
      "fullplot": "This movie is about a troubled genius solving math problems while working as a janitor."
    },
    {
      "_id": "1234",
      "title": "Rat Movie",
      "fullplot": "This movie is about a rat who loves to cook Italian food."
    },
    {
      "_id": "1234",
      "title": "Rat Movie",
      "fullplot": "This movie is about a rat who loves to cook Italian food."
    }
  ]

  return movies
}
export default async function Home() {
  const movies: any = await fetchMovies()

  return (
    <div className="mx-auto justify-center items-center h-screen">
      {/* <ul className="mx-auto my-auto items-center justify-center flex-row"> */}
        {movies.map(movie => (
          <Article key={movie._id}
            id={movie._id}
            title={movie.title}
            summary={movie.fullplot}
          >

          </Article>
      ))}
    </div>
  )
}
