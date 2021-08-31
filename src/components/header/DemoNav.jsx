import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav">
            <p className="nav_menu">
                <Link to="/DemoLogin">Login</Link>
            </p>
            <p className="nav_menu">
                <Link to="/KitButton">Button</Link>
            </p>
            <p className="nav_menu">
                <Link to="/KitForm">Form</Link>
            </p>
            <p className="nav_menu">
                <Link to="/KitProfile">Profile</Link>
            </p>
            <p className="nav_menu">
                <Link to="/KitPopup">Popup</Link>
            </p>
            <p className="nav_menu">
                <Link to="/KitEx">Ex</Link>
            </p>
        </nav>
    );
}
