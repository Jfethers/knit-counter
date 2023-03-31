import React, { FunctionComponent } from 'react';

interface ICounterProps {
    name: string,
    startingValue: number,
    color: string
}

const Counter: FunctionComponent<ICounterProps> = (props: ICounterProps) => {
    const { name, startingValue, color } = props;
    return (
        <div>hihihi</div>
    )
}

export default Counter;