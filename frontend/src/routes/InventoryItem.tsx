import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "@styles/InventoryItem.css";
import heart_hollow from "@assets/heart-hollow.svg";
import heart_filled from "@assets/heart-filled.svg";
import delete_button_svgrepo_com from "@assets/delete-button-svgrepo-com.svg";
import { InventoryItem } from '@src/types/inventory';

export default function ItemInventory() {
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

    function handleDelete() {
        axios.post('http://localhost:8080/remove-item', { id: Number(id) })
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.error("Error removing item:", error);
                alert("Failed to remove item");
            });
    };

    function handleToggleFavourite() {
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
                <p>£{item.price}</p>
                <p><a href={item.url} target="_blank">View Item</a></p>

                <div id="filters-container">
                    <button id="toggle-favorites-button" onClick={handleToggleFavourite}>
                        {item.favourite ? (
                            <img src={heart_filled} />
                        ) : (
                            <img src={heart_hollow} />
                        )}
                    </button>

                    <button onClick={handleDelete}>
                        <img src={delete_button_svgrepo_com} />
                    </button>
                </div>
            </div>
            <div id="inventory-item-image-container">
                <img src={item.image} alt={item.name} />
            </div>
        </div>
    );
}
