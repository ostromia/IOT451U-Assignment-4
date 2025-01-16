import { useState } from 'react';
import axios from 'axios';
import "@styles/AddItem.css";

interface AddItemProps {
    onClose: () => void;
    onItemAdded: () => void;
}

export default function AddItem({ onClose, onItemAdded }: AddItemProps) {
    const [formData, setFormData] = useState({
        name: '',
        url: '',
        image: '',
        price: '',
        category: '',
        brand: '',
    });
    const [message, setMessage] = useState('');

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    async function handleAddItem(e: React.FormEvent) {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/add-item', {
                name: formData.name,
                url: formData.url,
                image: formData.image,
                price: parseFloat(formData.price),
                category: formData.category,
                brand: formData.brand
            });

            if (response.status === 201) {
                setMessage('Item added successfully!');
                setFormData({
                    name: '',
                    url: '',
                    image: '',
                    price: '',
                    category: '',
                    brand: '',
                });
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
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        URL:
                        <input type="text" name="url" value={formData.url} onChange={handleInputChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Image:
                        <input type="text" name="image" value={formData.image} onChange={handleInputChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input type="number" step="0.01" name="price" value={formData.price} onChange={handleInputChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Category:
                        <input type="text" name="category" value={formData.category} onChange={handleInputChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Brand:
                        <input type="text" name="brand" value={formData.brand} onChange={handleInputChange} required />
                    </label>
                </div>
                <button type="submit">Add Item</button>
            </form>
            {message && <div className="message">{message}</div>}
        </div>
    );
}
