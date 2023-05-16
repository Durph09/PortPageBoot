import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { AttentionSeeker } from "react-awesome-reveal";

const SuccessModal = ({ firstName, show, onHide }) => {
  const capFirstName = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <>
      <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <AttentionSeeker effect="shakeY">
            <Modal.Title className="text-success">Success</Modal.Title>
          </AttentionSeeker>
        </Modal.Header>
        <Modal.Body className="text-success">
          I look forward to speaking with soon {capFirstName(firstName)}
        </Modal.Body>
        <Button
          variant="success"
          size="lg"
          onClick={onHide}
          className="w-25 m-2"
        >
          Close
        </Button>
      </Modal>
    </>
  );
};
export default SuccessModal;
