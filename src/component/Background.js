import {useState, useEffect} from 'react';
import background from '../assets/6.jpeg';
import letterN from '../assets/icon.webp';


const Background = () => {
    const myStyle={
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className='content' style={myStyle}>
            <div className='content__data'>
            <div className='logo'>
                <img src={letterN} alt="n" />
                <p>SERIES</p>
            </div>
            <h3>Money Heist</h3>
           <p className='text-gray'> 2017 | 16+ | 5 seasons | Crime Scene</p>
           <p>Eight thieve try to steal in nigeria bank but they did not see money. so they went 
               to LAPO to borrow money.
           </p>

           <p><span className='text-gray'>Starring: </span> Professor Chifu, Ikorodu, Mushin 
            <br/> 
            <span className='text-gray'> Creators</span> Atomicity
           </p>

             <a href='#' className='btn btn-danger btn-lg'>Watch Season 5</a>
            </div>
          
        </div>
    )
}

export default Background;