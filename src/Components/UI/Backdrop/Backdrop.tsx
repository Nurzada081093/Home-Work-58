import * as React from 'react';

interface Props {
  show: boolean;
  onClose: () => void;
}

const Backdrop: React.FC<Props> = ({show, onClose}) => {
  return (
    <div
      onClick={() => onClose}
      className="modal-backdrop show"
      style={{display: show ? 'block' : 'none'}}
    />
  );
};

export default Backdrop;