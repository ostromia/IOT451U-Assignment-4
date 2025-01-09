import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/InventoryItem.css";

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

function ItemDetail() {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<InventoryItem | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/inventory`)
            .then(response => {
                const foundItem = response.data.find((i: InventoryItem) => i.id === Number(id));
                setItem(foundItem);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const handleDelete = () => {
        axios.post('http://localhost:8080/remove-item', { id: Number(id) })
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.error("Error removing item:", error);
                alert("Failed to remove item");
            });
    };

    const handleToggleFavourite = () => {
        axios.post('http://localhost:8080/favourite', { id: Number(id) })
            .then(() => {
                setItem(prev => prev ? { ...prev, favourite: !prev.favourite } : null);
            })
            .catch(error => {
                console.error("Error toggling favourite status:", error);
                alert("Failed to toggle favourite status");
            });
    };

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div id="inventory-item-container">
            <div id="inventory-item-text-container">
                <h1>{item.name}</h1>
                <p>{item.brand}</p>
                <p>{item.category}</p>
                <p>Price: £{item.price}</p>
                <p><a href={item.url}>View Item</a></p>
                <p>{item.favourite ? "Marked as Favourite" : "Not a Favourite"}</p>
                <button onClick={handleDelete}>Delete Item</button>
                <button onClick={handleToggleFavourite}>
                    {item.favourite ? "Remove from Favourites" : "Add to Favourites"}
                </button>
            </div>
            <div id="inventory-item-image-container">
                <img src={item.image} alt={item.name} />
            </div>
        </div>
    );
}

export default ItemDetail;
