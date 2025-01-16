import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "@layouts/Layout";
import Inventory from '@routes/Inventory';
import InventoryItem from '@routes/InventoryItem';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Inventory/>}></Route>
                    <Route path="/inventory/:id" element={<InventoryItem />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
