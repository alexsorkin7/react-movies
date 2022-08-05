export default function Movie(props) {
   let {Title,Year,imdbID,Type,Poster} = props
   return <div className="movie">
      <div className="title">{Title}</div>
      <div className="year">{Year}</div>
      <div className="poster">
         <img src={Poster} alt={imdbID} />
      </div>
      <div className="type">{Type}</div>
   </div>
}