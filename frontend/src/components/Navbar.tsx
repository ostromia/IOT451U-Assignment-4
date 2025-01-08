import { Link } from 'react-router-dom';
import wardrobe_svgrepo_com from "../assets/wardrobe-svgrepo-com.svg";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav>
            <Link id="navbar-icon" to="/">
                <img src={wardrobe_svgrepo_com} />
            </Link>

            <Link to="/inventory">
                Inventory
            </Link>

            <Link to="/add-item">
                Add Item
            </Link>
        </nav>
    );
}

export default Navbar;