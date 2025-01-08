import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/Inventory.css";

interface InventoryItem {
    id: number;
    name: string;
    url: string;
    image: string;
    brand: string;
    price: number;
    category: string;
    favourite: boolean;
}

function Inventory() {
    const [inventory, setInventory] = useState<InventoryItem[]>([]);
    const [showFavorites, setShowFavorites] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/inventory`)
            .then(response => {
                setInventory(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleToggleFavorites = () => {
        setShowFavorites((prev) => !prev);
    };

    const filteredInventory = showFavorites
        ? inventory.filter(item => item.favourite)
        : inventory;

    return (
        <>
            <button onClick={handleToggleFavorites}>
                {showFavorites ? "Show All Items" : "Show Favorites"}
            </button>
            <div id="inventory">
                    {filteredInventory.map((item) => (
                        <Link to={`/inventory/${item.id}`} key={item.id}>
                            <div className="inventory-item">
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </>
    );
}

export default Inventory;
