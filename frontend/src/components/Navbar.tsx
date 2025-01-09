import { Link } from 'react-router-dom';
import wardrobe_svgrepo_com from "../assets/wardrobe-svgrepo-com.svg";
import logo from "../assets/logo.jpeg";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav>
            <Link to="/">
                Wardrobe
            </Link>
        </nav>
    );
}

export default Navbar;