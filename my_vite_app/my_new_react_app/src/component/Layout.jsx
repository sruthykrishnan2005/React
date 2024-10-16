import { Link, Outlet } from "react-router-dom"


function Layout() {
    return (
        <>
            {/* <nav>
            <ul>
                <li>
                    <Link to="/">Home page</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav> */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="javascript:void(0)">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to="/" className="nav-link" >Home </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/contact"  className="nav-link" >Contact</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/About"  className="nav-link" >About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default Layout
