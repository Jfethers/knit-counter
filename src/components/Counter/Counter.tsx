import React, { FunctionComponent } from 'react';
import { ReactComponent as Close } from '../../icons/xmark-solid.svg'
import { ReactComponent as Edit } from '../../icons/pencil-solid.svg';
import { ReactComponent as Plus } from '../../icons/plus-solid.svg';
import { ReactComponent as Minus } from '../../icons/minus-solid.svg';

interface ICounterProps {
    name: string,
    startingValue: number,
    color: string,
    index: number,
}

const Counter: FunctionComponent<ICounterProps> = (props: ICounterProps) => {
    const { name, startingValue, color, index } = props;
    const handleDelete = () => {
        console.log('?????')
        const allCounters = JSON.parse(localStorage.getItem('counters') || '[]');
        const counters = [...allCounters]
        console.log('counters', counters);
        counters.splice(index, 1);
        console.log('counters post splice', counters);
        localStorage.setItem("counters", JSON.stringify(counters));
    }

    return (
        <div className="counter-base" style={{ backgroundColor: `#${color}` }}>
            <Close className="close icon" onClick={() => handleDelete()} />
            <Edit className="edit icon" />
            <div className="counter-details">
                <div>name: {name}</div>
                <div>Count: {startingValue}</div>
            </div>
            <div className="counter-buttons">
                <Plus className="plus icon" />
                <Minus className="minus icon" />
            </div>
        </div>
    )
}

export default Counter;