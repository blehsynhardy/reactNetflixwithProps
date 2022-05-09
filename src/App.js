import Movies from './component/Movies';
import Header from './component/Header';
import {useState } from 'react';
import './App.css';
import Addmovie from './component/Addmovie';

function App() {

  const [movies, setMovies] = useState([
    {
        id: 1,
        movie: 'george of the jungle',
        price : '$100'
    },

    {
        id: 2,
        movie: 'Uncharttered',
        price : '$200'
    },

    {
        id: 3,
        movie: 'Fast & Furious',
        price : '$400'
    },

    {
      id: 4,
      movie: 'Guns and Glory',
      price : '$420'
  },
])

const addMovies = (data) => {
    const id = Math.floor(Math.random() * 10000) + 1
     const latestMovies = {id, ...data };
   setMovies([...movies, latestMovies]);

}
  return (
    <div className="App">
              <Header amountofmovies ={movies.length}/>
              <Addmovie onAdd={addMovies} />
               <Movies movies={movies}/>                
    </div>
  );
}

export default App;
