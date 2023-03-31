import React, { FunctionComponent, ReactNode, Ref, RefObject } from 'react';

interface IModalProps {
    showModal: boolean,
    children: ReactNode,
}

const Modal: FunctionComponent<IModalProps> = (props: IModalProps) => {
    const { showModal, children } = props;

    return (
        <div className="modal">
            { showModal ? (
                <div className="modal-body">{ children }</div>
            ) : (
            null
            )}
        </div>
    )
}

export default Modal;