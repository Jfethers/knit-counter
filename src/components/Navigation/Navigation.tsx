import React, { FunctionComponent, useState } from 'react';
import UpsertCounter from '../UpsertCounter/UpsertCounter';
import Modal from '../Modal/Modal';
import Button from '../Button/Button'

interface INavigationProps {
    counters: []
}

const Navigation: FunctionComponent<INavigationProps> = (props: INavigationProps) => {
    const { counters } = props;
    const [ showModal, setShowModal ] = useState(false);

    return (
        <div className="navigation">
            <h1>Knit Counter</h1>
            <div className="add-button">
                <Button className="button"onClick={() => setShowModal(true)}>ADD COUNTER</Button>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <UpsertCounter isNew={true} counters={counters} setShowModal={setShowModal} />
                </Modal>
            </div>
        </div>
    )
}

export default Navigation;
