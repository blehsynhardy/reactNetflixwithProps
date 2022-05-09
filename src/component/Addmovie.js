import { useState } from 'react';
const Addmovie = ({onAdd}) => {

    const [movie, updateMovieName] = useState('');
    const [price, updatePrice] = useState('');

    const checkName = (e) => {
       updateMovieName(e.target.value);
    }

    const checkPrice = (e) => {
        updatePrice(e.target.value);
     }

     const addMovies = (e) => {

       //const price = ${price}
         e.preventDefault();
         {(!movie || !price) ? alert('field cannot be empty') : onAdd({ movie, price })};

         updateMovieName('');
         updatePrice('');
     }

    return (
    <div className="container">
        <form className="addmovie__new" onSubmit={addMovies}>
            <input type='text' name='movie__name' onChange={checkName} placeholder="enter movie name" value={movie}/>
            <input type='text' name='price__name' onChange={checkPrice} placeholder="enter price" value={price} />
            <button className="btn">SUBMIT</button>
        </form>
    </div>

    )

};

export default Addmovie;