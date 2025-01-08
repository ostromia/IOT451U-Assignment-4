import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import "../styles/Layout.css";

function Layout() {
    return (
        <div id="layout-container">
            <div id="layout-navbar-container">
                <Navbar />
            </div>
            <div id="layout-outlet-container">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
