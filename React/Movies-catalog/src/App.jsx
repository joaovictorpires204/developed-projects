import './assets/styles/index.css'
import Header from './components/1-header'
import ShowMovies from './components/2-show-movie-box'
import Movies from './components/3-catalog-list'

import database from './assets/js/movie-list'
import React from 'react'


class App extends React.Component {
  state = {
    movie: database[0],
    movies: database
  }

  setChoseMovie(movie) {
    this.setState({
      movie
    })
  }


  render() {
    return (
      <div>
        <Header />
        <ShowMovies movie={this.state.movie} />
        <Movies 
        movie={this.state.movies} 
        selected={this.state.movie}
        handleClick={this.setChoseMovie.bind(this)}
        />
      </div>
    )
  }
}

export default App
