import { useState } from 'react';
import axios from 'axios';
import "@styles/AddItem.css";

interface AddItemProps {
    onClose: () => void;
    onItemAdded: () => void;
}

export default function AddItem({ onClose, onItemAdded }: AddItemProps) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [message, setMessage] = useState('');

    const handleAddItem = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/add-item', {
                name,
                url,
                image,
                price: parseFloat(price),
                category,
                brand,
            });

            if (response.status === 201) {
                setMessage('Item added successfully!');
                setName('');
                setUrl('');
                setImage('');
                setPrice('');
                setCategory('');
                setBrand('');
                onItemAdded();
                onClose();
            }
        } catch (error: any) {
            setMessage(`Error: ${error.response?.data?.error || error.message}`);
        }
    };

    return (
        <div id="add-item-container">
            <h1>Add Item to Inventory</h1>
            <form onSubmit={handleAddItem}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        URL:
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Image:
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input
                            type="number"
                            step="0.01"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Category:
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Brand:
                        <input
                            type="text"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">
                    Add Item
                </button>
            </form>
            {message && (
                <div className="message">
                    {message}
                </div>
            )}
        </div>
    );
}
