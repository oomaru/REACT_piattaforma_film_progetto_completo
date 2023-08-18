// Imports
import './App.css';
import {useState, useEffect} from 'react';
import MovieList from './Components/MovieList';
import { Navbar } from './Components/Navbar';
import MovieDetail from './Components/MovieDetail';
import { fetchMovies, fetchMovieById } from './Utils';

// App
function App() {
   
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState('');
  const [errorDetail, setErrorDetail] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectMovie = async (movie) => {
    setSelectedMovie(movie);
    const newMovie = await fetchMovieById(movie.imdbID);
     if (newMovie.Error) {
       setErrorDetail(newMovie.Error);
        setSelectedMovie(null); 
     } else {
       setSelectedMovie(newMovie); 
     }
   
  };

  // API
  const callApi = async (search = '') => {

    const data = await fetchMovies(search);
    console.log(data)
   setError(data.Error);
   
   if (!data.Error.length) {
     setMovies(data.movies);
     setSelectedMovie(data.movies[0]);
     setTotalCount(data.totalCount);
   } else {
     setTotalCount(0);
     setMovies([]);
   }
    }
  useEffect(() => {
   
    callApi('Harry Potter');
    return () => {
     
    }
  }, []);

  return (
    <>

    {/* Navbar and Header */}
      <Navbar onSearchChange={callApi }/>
    <div className="App container-fluid">
      <header className="App-header">
        {/* <h1 className='text-danger'>FLIXNET - La tua TV in streaming</h1> */}
        <h2> Nel catalogo sono presenti: {totalCount} film per questa ricerca</h2>      
        </header>
        {
          !error ? <MovieList error={errorDetail} onSelectMovie={selectMovie} movies={movies} /> : <h2>{ error}</h2>
        } 
        <MovieDetail movie={selectedMovie}/>
      </div>
      </>
  );
}

export default App;