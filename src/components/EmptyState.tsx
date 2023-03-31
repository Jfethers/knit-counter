import React, { useState } from 'react';
import Modal from './Modal';
import AddCounter from './AddCounter';

const EmptyState = () => {
    const [ showModal, setShowModal ] = useState(false);

    return (
        <div className="empty-state">
            <div className="button" onClick={() => setShowModal(true)}>Add Counter</div>
            <Modal showModal={showModal}>
                <AddCounter />
            </Modal>
        </div>
    )
}

export default EmptyState;
