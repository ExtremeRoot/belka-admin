import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar" to="/">Belkasoft CTF</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {/* <li className="nav-item">
                        <NavLink to='/addchallenge' activeClassName='active' className="nav-link">Add Challenge</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/users' activeClassName='active' className="nav-link">Users</NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to={'/submissions'} activeClassName="active">Submissions</NavLink>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
    )
}

export default Header;