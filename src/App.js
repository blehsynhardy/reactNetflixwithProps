import Movies from './component/Movies';
import Header from './component/Header';
import {useState } from 'react';
import './App.css';
import Addmovie from './component/Addmovie';
import Background from './component/Background';
 import IMG1 from './assets/1.jpeg';
 import IMG2 from './assets/2.jpeg';
 import IMG3 from './assets/3.jpeg';
 import IMG4 from './assets/4.jpeg';


function App() {

  const [movies, setMovies] = useState([
    {
        id: 1,
        movie: 'george of the jungle',
        price : '$100',
        img : IMG1
    },

    {
        id: 2,
        movie: 'Uncharttered',
        price : '$200',
        img: IMG2
        
    },

    {
        id: 3,
        movie: 'Fast & Furious',
        price : '$400',
        img : IMG3
    },

    {
      id: 4,
      movie: 'Guns and Glory',
      price : '$420',
      img : IMG4
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
              <Background landingPageMovie = {movies}/>
              <Addmovie onAdd={addMovies} />
               <Movies movies={movies}/>                
    </div>
  );
}

export default App;
