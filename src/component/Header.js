
const Header = ({amountofmovies}) => {
    return (
            <nav>
                <div className="navbar__brand">
                    <h1>Atom Flix</h1>
                </div>
                <ul>
                    <li><a href="#"> Total movies: <span>{amountofmovies}</span>  </a></li>
                </ul>
            </nav>

    )

}
export default Header;