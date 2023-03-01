import '../../assets/styles/banner.css'

const ShowMovies = ({movie}) => {
    return (
        <div className="banner">
            <div className="movie-image">
                <img src={movie.img} alt="" className='movie-photo-banner' />
            </div>
            <div className="banner-movie-content">
                <div className="banner-movie-header">
                <div className="movie-title">{movie.title}</div>
                    <div className="movie-director">Diretor: {movie.director}</div>
                </div>
                <div className="movie-score">{movie.score}</div>
                <div className="movie-sinopsys">{movie.sinopsys}</div>
            </div>
        </div>
    )
}

export default ShowMovies