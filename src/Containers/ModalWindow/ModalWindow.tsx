import Modal from '../../Components/Modal/Modal.tsx';
import { useState } from 'react';
import Alert from '../../Components/UI/Alert/Alert.tsx';

const ModalWindow = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(true);

  const cancel = () => {
    setShowModal(!showModal);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="container mt-5">
      <button
        className="btn btn-outline-primary mb-4"
        onClick={() => setShowModal(!showModal)}
      >
        Show modal
      </button>
      <Modal show={showModal} onClose={cancel} title="Some kinda modal title">
        <p>This is modal content</p>
      </Modal>
      <div>
        {showAlert ? (
          <>
            <Alert type="warning" onDismiss={closeAlert}>
              This is a warning type alert
            </Alert>
          </>
        ) : null}
        <Alert type="success">This is a success type alert</Alert>
      </div>
    </div>
  );
};

export default ModalWindow;
