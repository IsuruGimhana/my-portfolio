import "../styles/home.css";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import Button from "react-bootstrap/Button";

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
          href="/resume.pdf"
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
