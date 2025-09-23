import { Toast, ToastContainer } from "react-bootstrap";

const ToastMessage = ({ show, onClose, message, bg }) => (
  <ToastContainer position="top-end" className="p-3">
    <Toast onClose={onClose} show={show} delay={3000} autohide bg={bg}>
      <Toast.Body className="text-white">{message}</Toast.Body>
    </Toast>
  </ToastContainer>
);

export default ToastMessage;
