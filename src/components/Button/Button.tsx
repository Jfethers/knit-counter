import React, { FunctionComponent, ReactNode } from 'react';

interface IButtonProps {
    children: ReactNode,
    onClick: Function,
}

const Button: FunctionComponent<IButtonProps> = (props: IButtonProps) => {
    const { children, onClick } = props;

    return (
        <div className="button">
            { children }
        </div>
    )
}

export default Button;
