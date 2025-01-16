import { Outlet } from 'react-router-dom';
import '@fontsource/zen-dots';
import '@fontsource/bokor';
import Navbar from '@components/Navbar';
import "@styles/Layout.css";

export default function Layout() {
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
