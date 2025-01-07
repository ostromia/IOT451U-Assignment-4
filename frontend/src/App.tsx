import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface InventoryItem {
    id: number;
    name: string;
    url: string;
    image: string;
}

function App() {
    const [inventory, setInventory] = useState<InventoryItem[]>([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/inventory`)
            .then(response => {
                setInventory(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="App">
            <div id="inventory">
                {inventory.map((item) => (
                    <div className="inventory-item" key={item.id}>
                        <img src={item.image}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
