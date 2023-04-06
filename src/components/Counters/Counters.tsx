import React, { FunctionComponent } from 'react';
import Counter from '../Counter/Counter'
import { CountersType } from '../../types/Counters';

interface ICountersProps {
    counters: CountersType
}

const Counters: FunctionComponent<ICountersProps> = (props: ICountersProps) => {
    const { counters } = props;

    return (
        <div className="counters-wrapper">
            {counters?.map((counter, index) => {
            let key = crypto.randomUUID();
            return (
                <Counter counter={counter} counters={counters} key={key} index={index}/>
            )
        })}
        </div>
    )
}

export default Counters;