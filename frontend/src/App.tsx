import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import { Home, Inventory, InventoryItem } from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/inventory/:id" element={<InventoryItem />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
