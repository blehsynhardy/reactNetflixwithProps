import Movie from "./Movie";
const Movies = ({movies}) => {
    return (
        <div className="container movie__container">
            <p className="movie__paragraph">Movie List</p>
            <hr/>
            {
                movies.map((data) =>(
                   <Movie key={data.id} data={data}/>       
                ))
            }
        </div>
    )
}


export default Movies;