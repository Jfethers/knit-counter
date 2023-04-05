import React, { FunctionComponent, ReactNode, Ref, RefObject } from 'react';
import classNames from 'classnames';
import { ReactComponent as Close } from '../../icons/xmark-solid.svg';


interface IModalProps {
    showModal: boolean,
    children: ReactNode,
    setShowModal: Function,
}

const Modal: FunctionComponent<IModalProps> = (props: IModalProps) => {
    const { showModal, children, setShowModal } = props;

    return (
        <div className={classNames({
            'modal-overlay': true,
            active: showModal,
            }
        )}>
            { showModal ? (
                <div className="modal-body">
                    <Close className="close" onClick={() => setShowModal(false)}/>
                    <div className="modal-contents">
                    { children }
                    </div>
                </div>
            ) : (
            null
            )}
        </div>
    )
}

export default Modal;