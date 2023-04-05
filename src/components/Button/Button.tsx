import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface IButtonProps {
    children?: ReactNode,
    onClick: Function,
    className?: string,
    type?: string,
    disabled? : boolean,
}

const Button: FunctionComponent<IButtonProps> = (props: IButtonProps) => {
    const { children, onClick, className, disabled } = props;

    const handleClick = (onClick: Function) => {
        if (disabled) {
            return
        } else {
            return onClick();
        }
    }

    return (
        <div className={classNames(className, `${disabled ? 'disabled' : ''}`)} onClick={() => handleClick(onClick)}>
            { children }
        </div>
    )
}

export default Button;
