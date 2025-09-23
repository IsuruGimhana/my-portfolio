import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import "../styles/contact.css";

const Contact = ({ setToast }) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setToast({ show: true, message: "Message sent successfully!", bg: "success" });

          e.target.reset();
           // Force an error for testing
          // return Promise.reject(new Error("Test failure"));
        })
        .catch((error) => {
          console.error(error);
          setToast({ show: true, message: "Failed to send message. Please try again.", bg: "danger" });
        });
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title text-center mb-4">Contact Me</h2>
      <Form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} name="message" placeholder="Enter your message" required />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" className="submit-btn">
            Send Message
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
