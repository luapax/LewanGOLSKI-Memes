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
                    <NavLink to="/hot" className={getClassName}>Hot</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/regular" className={getClassName}>Regular</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/newMeme" className={getClassName}><button>Add new meme</button></NavLink>
                </li>
            </ul>

        </nav>
    );
}