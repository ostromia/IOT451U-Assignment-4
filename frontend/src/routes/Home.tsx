import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { AddItem, Inventory } from '../components/';

Modal.setAppElement('#root');

function Home() {
    const inventoryRef = useRef<any>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal  = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={() => inventoryRef.current.handleToggleFavorites()}>
                Toggle Favorites
            </button>

            <button onClick={handleOpenModal}>
                Add Item
            </button>

            <Inventory ref={inventoryRef} />

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
                <AddItem onClose={handleCloseModal} onItemAdded={() => inventoryRef.current.fetchInventory()} />
            </Modal>
        </>
    );
}

export default Home;
