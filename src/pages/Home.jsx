// import Projects from "../components/Projects";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import Profile from "../components/Profile";
// import Button from 'react-bootstrap/Button';

// // import profileImg from '../assets/profile.jpg';
// import resume from "../assets/resume.pdf";
// const Hero = () => {
//   return (
//     <div className="text-center">
//       <h1 className="display-4">Hello, I'm Isuru Gimhana</h1>
//       <p className="lead">I'm a Software Engineering Student and Aspiring Web Developer</p>
//       <section id="home">
//         <Profile />
//       </section>
//       <Button 
//       variant="primary"
//       href={resume}
//       target="_blank"
//       rel="noopener noreferrer"
//       >
//         View Resume
//       </Button>{' '}
//       <Button variant="outline-primary">Contact Me</Button>
//       <section id="about">
//         <About />
//       </section>
//       <section id="projects">
//         <Projects />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section>
//     </div>
//   );
// }
// export default Hero;


import "../styles/home.css";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import Button from "react-bootstrap/Button";
import resume from "../assets/resume.pdf";

const Home = ({ setToast }) => {
  return (
    <div className="hero-container">
      <h1>Hello, I'm Isuru Gimhana</h1>
      <p>I'm a Software Engineering Student and Aspiring Web Developer</p>

      <div className="profile-wrapper" id="home">
        <Profile />
      </div>

      <div className="hero-buttons">
        <Button
          variant="primary"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </Button>
        <Button variant="outline-primary" href="#contact">
          Contact Me
        </Button>
      </div>

      <section id="about" className="hero-section">
        <About />
      </section>

      <section id="projects" className="hero-section">
        <Projects />
      </section>

      <section id="contact" className="hero-section">
        <Contact setToast={setToast} />
      </section>
    </div>
  );
};

export default Home;
