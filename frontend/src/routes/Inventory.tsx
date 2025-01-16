import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddItem from '@components/AddItem';
import heart_hollow from "@assets/heart-hollow.svg";
import heart_filled from "@assets/heart-filled.svg";
import plus from "@assets/plus.svg";
import "@styles/Inventory.css";
import { InventoryItem } from '@src/types/inventory';

Modal.setAppElement('#root');

export default function Inventory() {
    const [inventory, setInventory] = useState<InventoryItem[]>([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function fetchInventory() {
        axios.get(`http://localhost:8080/inventory`)
            .then(response => {
                setInventory(response.data.reverse());
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchInventory();
    }, []);

    const filteredInventory = showFavorites ? inventory.filter(item => item.favourite) : inventory;

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    function toggleShowFavorites() {
        setShowFavorites((prev) => !prev);
    }

    return (
        <main id="inventory-container">
            <div id="inventory-filters-container">
                <button onClick={handleOpenModal}>
                    <img src={plus} />
                </button>

                <button onClick={toggleShowFavorites}>
                    {showFavorites ? (
                        <img src={heart_filled} />
                    ) : (
                        <img src={heart_hollow} />
                    )}
                </button>
            </div>

            <div id="inventory">
                {filteredInventory.map((item) => (
                    <Link to={`/inventory/${item.id}`} key={item.id}>
                        <div className="inventory-item">
                            <img src={item.image} alt={item.name} />
                        </div>
                    </Link>
                ))}
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    content: {
                        position: 'relative',
                        inset: 'auto',
                        backgroundColor: 'black',
                        border: '1px solid grey',
                        borderRadius: '10px',
                        margin: 'auto'
                    },
                }}
            >
                <AddItem onClose={handleCloseModal} onItemAdded={fetchInventory} />
            </Modal>

        </main>
    );
}
