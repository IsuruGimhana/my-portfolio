// // src/components/Footer.jsx
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light py-4 mt-auto">
//       <Container>
//         <Row className="text-center">
//           <Col md={6} className="mb-3 mb-md-0">
//             <p>&copy; {new Date().getFullYear()} Isuru Gimhana. All rights reserved.</p>
//           </Col>
//           <Col md={6}>
//             <a
//               href="https://github.com/IsuruGimhana"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-light mx-2"
//             >
//               GitHub
//             </a>
//             <a
//               href="https://www.linkedin.com/in/kadisuru/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-light mx-2"
//             >
//               LinkedIn
//             </a>
//             <a
//               href="mailto:igimhana10000@gmail.com"
//               className="text-light mx-2"
//             >
//               Email
//             </a>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="text-center align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Isuru Gimhana. All rights reserved.
            </p>
          </Col>
          <Col md={6}>
            <a
              href="https://github.com/IsuruGimhana"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kadisuru/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="mailto:igimhana10000@gmail.com"
              className="footer-link"
            >
              Email
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
