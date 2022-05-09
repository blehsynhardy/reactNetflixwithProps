
const Movie = ({ data }) => {
    return  (
        <div className="container movie__list">
            <h3>{data.movie}</h3>
            <h4>{data.price}</h4>
        </div>
    )
}


export default Movie;