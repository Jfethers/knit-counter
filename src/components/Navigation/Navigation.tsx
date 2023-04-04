import React, { FunctionComponent, useState } from 'react';
import AddCounter from '../AddCounter/AddCounter';
import Modal from '../Modal/Modal';
import Button from '../Button/Button'

interface INavigationProps {
    allCounters: []
}

const Navigation: FunctionComponent<INavigationProps> = (props: INavigationProps) => {
    const { allCounters } = props;
    const [ showModal, setShowModal ] = useState(false);

    return (
        <div className="navigation">
            <h1>Knit Counter</h1>

            {allCounters.length === 0 ? (
                <div className="add-button">
                    <Button onClick={() => setShowModal(true)}>ADD COUNTER</Button>
                    <Modal showModal={showModal} setShowModal={setShowModal}>
                        <AddCounter setShowModal={setShowModal} />
                    </Modal>
                </div>
            ) : (
                null
            )}
        </div>
    )
}

export default Navigation;
