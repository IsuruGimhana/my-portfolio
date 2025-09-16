// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const Contact = () => {
//   return (
//     <div className="contact-section" id="contact">
//       <h2 className="text-center mb-4">Contact Me</h2>
//       <Form>
//         <Form.Group controlId="formName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter your name" />
//         </Form.Group>
//         <Form.Group controlId="formEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter your email" />
//         </Form.Group>
//         <Form.Group controlId="formMessage">
//           <Form.Label>Message</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Send Message
//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default Contact;

// import { useRef } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import emailjs from "emailjs-com";
// import "../styles/contact.css";

// const Contact = () => {
//   const formRef = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_12t73ol",   // Replace with your EmailJS Service ID
//         "template_gpoawhr",  // Replace with your EmailJS Template ID
//         formRef.current,
//         "GiY8jorX-iRsvOy8b"    // Replace with your EmailJS Public Key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("✅ Message sent successfully!");
//           e.target.reset(); // Clear form after success
//         },
//         (error) => {
//           console.error(error.text);
//           alert("❌ Failed to send message. Please try again.");
//         }
//       );
//   };

//   return (
//     <div className="contact-section" id="contact">
//       <h2 className="contact-title text-center mb-4">Contact Me</h2>
//       <Form ref={formRef} onSubmit={sendEmail} className="contact-form">
//         <Form.Group controlId="formName" className="mb-3">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" name="from_name" placeholder="Enter your name" required />
//         </Form.Group>

//         <Form.Group controlId="formEmail" className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" name="from_email" placeholder="Enter your email" required />
//         </Form.Group>

//         <Form.Group controlId="formMessage" className="mb-3">
//           <Form.Label>Message</Form.Label>
//           <Form.Control as="textarea" rows={4} name="message" placeholder="Enter your message" required />
//         </Form.Group>

//         <div className="text-center">
//           <Button variant="primary" type="submit" className="submit-btn">
//             Send Message
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default Contact;

import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import ToastMessage from "./ToastMessage";
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
        },
        (error) => {
          console.error(error.text);
          setToast({ show: true, message: "Failed to send message. Please try again.", bg: "danger" });
        }
      );
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

      {/* Toast Notification */}
        {/* <ToastMessage
          show={toast.show}
          onClose={() => setToast({ ...toast, show: false })}
          message={toast.message}
          bg={toast.bg}
        /> */}
    </div>
  );
};

export default Contact;
