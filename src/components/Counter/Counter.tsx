import React, { FunctionComponent } from 'react';

interface ICounterProps {
    name: string,
    startingValue: number,
    color: string
}

const Counter: FunctionComponent<ICounterProps> = (props: ICounterProps) => {
    const { name, startingValue, color } = props;
    return (

        <div className="counter-base">
                    <div className="counter-details">
                        <div>{name}</div>
                        <div>{startingValue}</div>
                    </div>
                    <div className="counter-buttons">
                        <div className="counter-button">Increase</div>
                        <div className="counter-button">Decrease</div>
                    </div>
                </div>
    )
}

export default Counter;