import React, { FunctionComponent } from 'react';
import Counter from '../Counter/Counter'

interface ICountersProps {
    counters: {
        name: string,
        startingValue: number,
        color: string
    }[]
}

const Counters: FunctionComponent<ICountersProps> = (props: ICountersProps) => {
    const { counters } = props;

    return (
        <div>
            {counters.map(counter => {
            console.log('counter', counter);
            return (
                <div className="counter-base">
                    <div className="counter-details">
                        <div>{counter.name}</div>
                        <div>{counter.startingValue}</div>
                    </div>
                    <div className="counter-buttons">
                        <div className="counter-button">Increase</div>
                        <div className="counter-button">Decrease</div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Counters;