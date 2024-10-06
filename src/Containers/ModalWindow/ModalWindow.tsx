import Modal from '../../Components/UI/Modal/Modal.tsx';
import { useState } from 'react';

const ModalWindow = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const cancel = () => {
    setShowModal(!showModal);
  };

  return (
    <Modal
      show={showModal}
      onClose={cancel}
      title="Some kinda modal title"
    >
      <p>This is modal content</p>
    </Modal>
  );
};

export default ModalWindow;