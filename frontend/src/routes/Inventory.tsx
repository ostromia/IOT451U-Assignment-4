import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from  'react-router-dom';
import "../styles/Inventory.css";

interface InventoryItem {
    id: number;
    name: string;
    url: string;
    image: string;
}

function Inventory() {
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
        <div id="inventory">
            {inventory.map((item) => (
                <Link to={`/inventory/${item.id}`}>
                    <div className="inventory-item" key={item.id}>
                        <img src={item.image}/>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Inventory;
