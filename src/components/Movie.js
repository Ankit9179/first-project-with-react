
const Movie = ({img,imdbID,Title,year }) => {
  return (
    <div className="movie">
        <img src={img} alt="" />
        <p>id: {imdbID}</p>
        <p>name: {Title}</p>
        <p>year: {year}</p>
    </div>
  )
}

export default Movie