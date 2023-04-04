import React, { FunctionComponent } from 'react';

interface ICounterProps {
    name: string,
    startingValue: number,
    color: string,
    index: number,
}

const Counter: FunctionComponent<ICounterProps> = (props: ICounterProps) => {
    const { name, startingValue, color, index } = props;

    const handleDelete = () => {
        const allCounters = JSON.parse(localStorage.getItem('counters') || '[]');
        const counters = [...allCounters]
        counters.splice(index, 1);
        localStorage.setItem("counters", JSON.stringify(counters));
    }

    return (
        <div className="counter-base">
            <div className="close" onClick={() => handleDelete()}>X</div>
            <div className="counter-details">
                <div>name: {name}</div>
                <div>Count: {startingValue}</div>
            </div>
            <div className="counter-buttons">
                <div className="counter-button">Increase</div>
                <div className="counter-button">Decrease</div>
            </div>
        </div>
    )
}

export default Counter;