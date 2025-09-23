// src/components/ProjectCard.jsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../styles/projects.css";

const projects = [
  {
    title: 'MERN Notes App',
    description: 'A notes app with JWT Authentication built with the MERN stack.',
    image: "/notes-app.png",
    github: 'https://github.com/IsuruGimhana/Notes-App',
    live: 'https://notes-app-frontend-fw5q.onrender.com',
  },
  {
    title: 'Twitter Clone',
    description: 'A Twitter clone built with the MERN stack.',
    image: '/twitter-clone.png',
    github: 'https://github.com/IsuruGimhana/Twitter-Clone-MERN',
    live: 'https://twitterclone.example.com',
  },
  {
    title: 'Disney+ Clone (Frontend)',
    description: 'A Disney+ clone built with React and Firebase.',
    image: 'disney-clone.png',
    github: 'https://github.com/IsuruGimhana/Disney-Clone',
    live: 'https://disneyplusclone.example.com',
  },
  {
    title: 'Movie Search App',
    description: 'A movie search app using the TMDB API built with React.',
    image: '/movie-search-app.png',
    github: 'https://github.com/IsuruGimhana/Movie-Search-Website',
    live: 'movie-search-website-navy.vercel.app',
  },
  {
    title: 'Shopping Management System',
    description: 'A shopping management system built with Java Swing',
    image: 'https://placehold.co/600x400?text=No+Image',
    github: 'https://github.com/IsuruGimhana/OOPCW',
    live: 'https://shoppingmanagementsystem.example.com',
  },
  {
    title: 'My Portfolio',
    description: 'My personal frontend portfolio built with React and Bootstrap.',
    image: '/my-portfolio.png',
    github: 'https://github.com/IsuruGimhana/my-portfolio',
    live: 'https://my-portfolio.example.com',
  },
];

const ProjectCard = ({ title, description, image, github, live }) => {
  return (
    <Card className="mb-4 shadow-sm project-card">
      {image && <Card.Img variant="top" src={image} alt={`${title} screenshot`} />}
      <Card.Body>
        <div className='text-wrapper'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </div>
        <div className="btn-wrapper">
          {github && (
            <Button
              variant="dark"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          )}
          {live && (
            <Button
              variant="primary"
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

const Projects = () => {
  return (
    <Container className="projects-container my-5">
      <h2 className="text-center">My Projects</h2>
      <Row>
        {projects.map((project, idx) => (
          <Col md={6} lg={4} key={idx}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;

