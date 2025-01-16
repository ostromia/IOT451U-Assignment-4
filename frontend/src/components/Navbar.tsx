import { Link } from 'react-router-dom';
import "@styles/Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                Wardrobe
            </Link>
        </nav>
    );
}
