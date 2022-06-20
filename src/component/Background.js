import {useState, useEffect} from 'react';
import background from '../assets/6.jpeg';
import letterN from '../assets/icon.webp';


const Background = ({landingPageMovie}) => {

    const[showMovie, updateShowMovie] = useState('');

    useEffect(() => {
        randomizeVideoData()
    }, [showMovie])


    const  randomizeVideoData = () => {
        var randomvie  = Math.floor(Math.random() * landingPageMovie.length);
        updateShowMovie(landingPageMovie[randomvie]);
    }

    // const myStyle={
    //     backgroundImage: `url(${showMovie.img})`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // }
    // console.log(showMovie);

    return (

        <div className='Apps'>
            {
                <div className='content' style={{ 
                    backgroundImage: `url(${showMovie.img})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                 }}>
                  <div className='content__data'>
                     <div className='logo'>
                         <img src={letterN} alt="n" />
                         <p>SERIES</p>
                     </div>
                     <h3>{showMovie.movie}</h3>
                     <p className='text-gray'> 2017 | 16+ | 5 seasons | Crime Scene</p>
                     <p>Eight thieve try to steal in nigeria bank but they did not see money. so they went 
                         to LAPO to borrow money.
                     </p>
 
                     <p><span className='text-gray'>Starring: </span> Professor Chifu, Ikorodu, Mushin 
                         <br/> 
                         <span className='text-gray'> Creators</span> Atomicity
                     </p>
 
                     <a href='#' className='btn btn-danger btn-lg' onClick={randomizeVideoData}>Watch Season 5</a>
                     </div>
                 
                 </div>
                //<h4>{showMovie.movie}</h4>
            }
           
        </div>
        
      
    )
}

export default Background;