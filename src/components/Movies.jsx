import './movies.css'
import Movie from './Movie'
export default function Movies(props) {
   let {movies = []} = props
   return movies.length 
   ? <div className="movies">
      {movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)}
   </div>
   : <div>Nothing found</div>
}