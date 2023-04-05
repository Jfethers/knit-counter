import React, { FunctionComponent, useState } from 'react';
import { ReactComponent as Close } from '../../icons/xmark-solid.svg'
import { ReactComponent as Edit } from '../../icons/pencil-solid.svg';
import { ReactComponent as Plus } from '../../icons/plus-solid.svg';
import { ReactComponent as Minus } from '../../icons/minus-solid.svg';
import Modal from '../Modal/Modal';
import UpsertCounter from '../UpsertCounter/UpsertCounter';

interface ICounterProps {
    index: number,
    counters: Array<object>,
    counter: {
        color: string,
        name: string,
        startingValue: number,
    },
}

const Counter: FunctionComponent<ICounterProps> = (props: ICounterProps) => {
    const { index, counters, counter } = props;
    const [ showModal, setShowModal ] = useState(false);

    const handleDelete = () => {
        const allCounters = JSON.parse(localStorage.getItem('counters') || '[]');
        const counters = [...allCounters]
        console.log('counters', counters);
        counters.splice(index, 1);
        console.log('counters post splice', counters);
        localStorage.setItem("counters", JSON.stringify(counters));
    }

    return (
        <div className="counter-base" style={{ backgroundColor: `#${counter.color}` }}>
            <Close className="close icon" onClick={() => handleDelete()} />
            <Edit className="edit icon" onClick={() => setShowModal(true)}/>
            <div className="counter-details">
                <div>name: {counter.name}</div>
                <div>Count: {counter.startingValue}</div>
            </div>
            <div className="counter-buttons">
                <Plus className="plus icon" />
                <Minus className="minus icon" />
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <UpsertCounter isNew={false} counters={counters} counter={counter} setShowModal={setShowModal} />
            </Modal>
        </div>
    )
}

export default Counter;