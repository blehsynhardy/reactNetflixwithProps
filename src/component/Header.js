import logored  from '../assets/netflixred.png';

const Header = ({amountofmovies}) => {
    return (
            <div className="parent">
                 <nav>
                    <div className="navbar__brand">
                        <img src={logored} alt="netflix" />
                    </div>

                    <div className='button'>
                        <button className='btn btn-danger'>JOIN NOW</button>
                        <button className='btn'>SIGN UP</button>
                        <button className='btn'>Total movies: <span>{amountofmovies}</span></button>
                        
                    </div>
                </nav>
            </div>
    )

}
export default Header;