import React, { FunctionComponent, ReactNode, Ref, RefObject } from 'react';
import classNames from 'classnames';

interface IModalProps {
    showModal: boolean,
    children: ReactNode,
}

const Modal: FunctionComponent<IModalProps> = (props: IModalProps) => {
    const { showModal, children } = props;

    return (
        <div className={classNames({
            'modal-overlay': true,
            active: showModal,

            }
        )}>
            { showModal ? (
                <div className="modal-body">{ children }</div>
            ) : (
            null
            )}
        </div>
    )
}

export default Modal;