import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/InventoryItem.css";

interface InventoryItem {
    id: number;
    name: string;
    url: string;
    image: string;
}

function ItemDetail() {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<InventoryItem | null>(null);

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

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div id="inventory-item-container">
            <div id="inventory-item-text-container">
                <h1>{item.name}</h1>
            </div>
            <div id="inventory-item-image-container">
                <img src={item.image} alt={item.name} />
            </div>
        </div>
    );
}

export default ItemDetail;
