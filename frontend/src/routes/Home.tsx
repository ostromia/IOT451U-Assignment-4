import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { AddItem, Inventory } from '../components/';
import "../styles/Home.css";

import heart_hollow from "../assets/heart-hollow.svg";
import heart_filled from "../assets/heart-filled.svg";
import plus from "../assets/plus.svg";

Modal.setAppElement('#root');

function Home() {
    const inventoryRef = useRef<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <div id="filters-container">
                <button onClick={handleOpenModal}>
                    <img src={plus} />
                </button>

                <button id="toggle-favorites-button" onClick={() => inventoryRef.current.handleToggleFavorites()}>
                    {showFavorites ? (
                        <img src={heart_filled} />
                    ) : (
                        <img src={heart_hollow} />
                    )}
                </button>
            </div>

            <Inventory
                ref={inventoryRef}
                onShowFavoritesChange={setShowFavorites}
            />

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
                <AddItem onClose={handleCloseModal} onItemAdded={() => inventoryRef.current.fetchInventory()} />
            </Modal>
        </>
    );
}


export default Home;
