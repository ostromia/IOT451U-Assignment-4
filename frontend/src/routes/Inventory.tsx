import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import AddItem from './AddItem';
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

Modal.setAppElement('#root');

function Inventory() {
    const [inventory, setInventory] = useState<InventoryItem[]>([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchInventory = () => {
        axios.get(`http://localhost:8080/inventory`)
            .then(response => {
                setInventory(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchInventory();
    }, []);

    const handleToggleFavorites = () => {
        setShowFavorites((prev) => !prev);
    };

    const filteredInventory = showFavorites
        ? inventory.filter(item => item.favourite)
        : inventory;

    const reversedInventory = [...filteredInventory].reverse();

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={handleToggleFavorites}>
                {showFavorites ? "Show All Items" : "Show Favorites"}
            </button>
            <button onClick={handleOpenModal} style={{ marginLeft: '10px' }}>
                Add Item
            </button>

            <div id="inventory">
                {reversedInventory.map((item) => (
                    <Link to={`/inventory/${item.id}`} key={item.id}>
                        <div className="inventory-item">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Add Item Modal"
                style={{
                    content: {
                        width: '50%',
                        margin: 'auto',
                    },
                }}
            >
                <AddItem onClose={handleCloseModal} onItemAdded={fetchInventory} />
            </Modal>
        </>
    );
}

export default Inventory;
