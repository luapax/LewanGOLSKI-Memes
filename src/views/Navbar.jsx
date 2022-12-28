import { NavLink } from "react-router-dom"

function getClassName({ isActive }) {
    if (isActive) {
        return "active"; // CSS class
    }
}

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="nav-item">
                    <NavLink to="/" className={getClassName}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/hot" className={getClassName}>Hot</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/regular" className={getClassName}>Regular</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/new-meme" className={getClassName}><button className="btn-navbar">Add new meme</button></NavLink>
                </li>
            </ul>

        </nav>
    );
}