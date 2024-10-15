// import {Link,Outlet} from "react-router-dom"


// function Layout(){
//     return(
//         <>
//         <nav>
//             <ul>
//                 <li>
//                     <Link to="/">Home page</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact">Contact</Link>
//                 </li>
//             </ul>
//         </nav>
//         <Outlet/>
//         </>
//     )
// }
// export default Layout







import { NavLink, Outlet } from "react-router-dom";
import './Navbar.css';

function Layout() {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-list">
                    <li>
                        <NavLink to="/" end activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout