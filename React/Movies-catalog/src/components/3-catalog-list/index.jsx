import moviesList from "../../assets/js/movie-list"
import '../../assets/styles/movies.css'

const Movies = ({ movies, handleClick, selected }) => {
    return (
        <div>
            <h1>Catalog</h1>
            <div className="movies-list">
                {moviesList.map(movie => (
                    <div key={movie.id} className="movies">
                        {Boolean(movie.img)
                            ? <img src={movie.img} alt="" className={selected.id === movie.id ? "movie-photo active" :"movie-photo" } onClick={() => handleClick(movie)}  title={movie.title}/>
                            : <span>{movie.title}</span>
                        }
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Movies