import Modal from '../../Components/Modal/Modal.tsx';
import { useState } from 'react';
import Alert from '../../Components/UI/Alert/Alert.tsx';

const ModalWindow = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const cancel = () => {
    setShowModal(!showModal);
  };

  const closeAlert = () => {
    console.log("You clicked to the button close (X)!");
  };

  return (
    <div className="container mt-5">
      <Modal show={showModal} onClose={cancel} title="Some kinda modal title">
        <p>This is modal content</p>
      </Modal>
      <Alert type="warning" onDismiss={closeAlert}>
        This is a warning type alert
      </Alert>
      <Alert type="success">This is a success type alert</Alert>
    </div>
  );
};

export default ModalWindow;
