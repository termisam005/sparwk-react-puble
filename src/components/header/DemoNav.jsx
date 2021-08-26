import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav">
            <p className="nav_menu">
                <Link to="/DemoLogin">Login</Link>
            </p>
            <p className="nav_menu">
                <Link to="/DemoButton">Button</Link>
            </p>
            <p className="nav_menu">
                <Link to="/DemoForm">Form</Link>
            </p>
            <p className="nav_menu">
                <Link to="/DemoProfile">Profile</Link>
            </p>
            <p className="nav_menu">
                <Link to="/DemoPop">Popup</Link>
            </p>
        </nav>
    );
}
