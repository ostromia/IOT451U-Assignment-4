import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AddItem } from '../components';
import { Link } from 'react-router-dom';
import "../styles/Home.css";
import "../styles/inventory.css";

import axios from 'axios';

import heart_hollow from "../assets/heart-hollow.svg";
import heart_filled from "../assets/heart-filled.svg";
import plus from "../assets/plus.svg";

Modal.setAppElement('#root');

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

export default function Inventory() {
    const [inventory, setInventory] = useState<InventoryItem[]>([]);
    const [showFavorites, setShowFavorites] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const inventoryRef = useRef<any>(null);
    // const [showFavorites, setShowFavorites] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

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


    function toggleShowFavorites() {
        setShowFavorites((prev) => !prev);
    }


    const filteredInventory = showFavorites ? inventory.filter(item => item.favourite) : inventory;

    return (
        <>
            <div id="filters-container">
                <button onClick={handleOpenModal}>
                    <img src={plus} />
                </button>

                <button id="toggle-favorites-button" onClick={toggleShowFavorites}>
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
                        backgroundColor: 'black',
                        borderRadius: '10px',
                        width: '50%',
                        margin: 'auto',
                    },
                }}
            >
                <AddItem onClose={handleCloseModal} onItemAdded={() => fetchInventory()} />
            </Modal>
        </>
    );
}
