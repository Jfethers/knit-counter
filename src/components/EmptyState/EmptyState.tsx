import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import AddCounter from '../AddCounter/AddCounter';

const EmptyState = () => {
    const [ showModal, setShowModal ] = useState(false);

    return (
        <div className="empty-state">
            <div className="button" onClick={() => setShowModal(true)}>Add Counter</div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <AddCounter />
            </Modal>
        </div>
    )
}

export default EmptyState;
