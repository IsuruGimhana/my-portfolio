// import { Navbar, Nav, Container } from 'react-bootstrap';

// const CustomNavbar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
//         <Navbar.Toggle aria-controls="portfolio-navbar" />
//         <Navbar.Collapse id="portfolio-navbar">
//           <Nav className="ms-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#projects">Projects</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;


import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/navbar.css'; // Import the CSS file

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className="brand">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
