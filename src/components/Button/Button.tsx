import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

interface IButtonProps {
    children: ReactNode,
    onClick: Function,
    className: string,
}

const Button: FunctionComponent<IButtonProps> = (props: IButtonProps) => {
    const { children, onClick, className } = props;

    return (
        <div className={className} onClick={() => onClick()}>
            { children }
        </div>
    )
}

export default Button;
