import Backdrop from '../Backdrop/Backdrop.tsx';
import * as React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title?: string;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({show, title, children, onClose}) => {
  return (
    <>
      <Backdrop show={show} onClose={onClose}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-between">
              <div>
                <h1 className="modal-title fs-5 p-2 text-light-emphasis">{title}</h1>
              </div>
              <div>
                <button type="button" className="border-0 bg-transparent" onClick={onClose}>
                  <img width="30" height="30" src="https://img.icons8.com/color/48/delete-sign--v1.png"
                       alt="delete-sign--v1"/>
                </button>
              </div>
            </div>
            <div className="p-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;