import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import AddCounter from '../AddCounter/AddCounter';

const EmptyState = () => {
    const [ showModal, setShowModal ] = useState(false);

    return (
        <div className="empty-state">
            no counters! click to add new counter
        </div>
    )
}

export default EmptyState;
