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
                <Counter name={counter.name} color={counter.color} startingValue={counter.startingValue}/>
            )
        })}
        </div>
    )
}

export default Counters;