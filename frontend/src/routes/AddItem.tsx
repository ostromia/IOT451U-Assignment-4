import { useState } from 'react';
import axios from 'axios';

function App() {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [message, setMessage] = useState('');

    const handleAddItem = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/add-item', {
                name,
                url,
                image,
                price: parseFloat(price), // Ensure price is a number
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
            }
        } catch (error) {
            setMessage(`Error: ${error.response?.data?.error || error.message}`);
        }
    };

    return (
        <div id="add-item-container">
            <h1>Add Item to Inventory</h1>
            <form onSubmit={handleAddItem}>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ marginLeft: '10px', padding: '5px' }}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        URL:
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            style={{ marginLeft: '10px', padding: '5px' }}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Image:
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            style={{ marginLeft: '10px', padding: '5px' }}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Price:
                        <input
                            type="number"
                            step="0.01"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            style={{ marginLeft: '10px', padding: '5px' }}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Category:
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            style={{ marginLeft: '10px', padding: '5px' }}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Brand:
                        <input
                            type="text"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            style={{ marginLeft: '10px', padding: '5px' }}
                            required
                        />
                    </label>
                </div>
                <button type="submit" style={{ padding: '10px 20px' }}>
                    Add Item
                </button>
            </form>
            {message && (
                <div style={{ marginTop: '20px', color: 'green' }}>
                    {message}
                </div>
            )}
        </div>
    );
}

export default App;
