import React, { FunctionComponent, useState } from 'react';
import { ReactComponent as Close } from '../../icons/xmark-solid.svg'
import { ReactComponent as Edit } from '../../icons/pencil-solid.svg';
import { ReactComponent as Plus } from '../../icons/plus-solid.svg';
import { ReactComponent as Minus } from '../../icons/minus-solid.svg';
import Modal from '../Modal/Modal';
import UpsertCounter from '../UpsertCounter/UpsertCounter';
import { CounterType } from '../../types/Counter';
import { CountersType } from '../../types/Counters';

interface ICounterProps {
    index: number,
    counters: CountersType,
    counter: CounterType,
}

const Counter: FunctionComponent<ICounterProps> = (props: ICounterProps) => {
    const { index, counters, counter } = props;
    const [ showModal, setShowModal ] = useState(false);

    const handleDelete = () => {
        counters.splice(index, 1);
        localStorage.setItem("counters", JSON.stringify(counters));
        window.dispatchEvent(new Event('storage'))
    }

    const handleIncrement = () => {
        const newCounter = {...counter}
        let startingValue = newCounter.startingValue as number;
        startingValue += 1;
        newCounter.startingValue = startingValue;
        counters.splice(index, 1, newCounter);
        localStorage.setItem("counters", JSON.stringify(counters));
        window.dispatchEvent(new Event('storage'))
    }

    const handleDecrement = () => {
        const newCounter = {...counter}
        if (newCounter.startingValue == 0) return;
        let startingValue = newCounter.startingValue as number;
        startingValue -= 1;
        newCounter.startingValue = startingValue;
        counters.splice(index, 1, newCounter);
        localStorage.setItem("counters", JSON.stringify(counters));
        window.dispatchEvent(new Event('storage'))
    }

    return (
        <>
        <div className="counter-base" style={{ backgroundColor: `#${counter.color}` }}>
            <Close className="close icon" onClick={() => handleDelete()} />
            <Edit className="edit icon" onClick={() => setShowModal(true)}/>
            <div className="counter-details">
                <div>name: {counter.name}</div>
                <div>Count: {counter.startingValue}</div>
            </div>
            <div className="counter-buttons">
                <Plus className="plus icon" onClick={() => handleIncrement()} />
                <Minus className="minus icon" onClick={() => handleDecrement()} />
            </div>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <UpsertCounter index={index} isNew={false} counters={counters} counter={counter} setShowModal={setShowModal} />
        </Modal>
        </>
    )
}

export default Counter;