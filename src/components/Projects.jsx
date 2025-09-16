// src/components/ProjectCard.jsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// const ProjectCard = ({ title, description, image, github, live }) => {
//   return (
//     <Card className="mb-4 shadow-sm">
//       {image && <Card.Img variant="top" src={image} alt={`${title} screenshot`} />}
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{description}</Card.Text>
//         <div className="d-flex justify-content-between">
//           {github && (
//             <Button
//               variant="dark"
//               href={github}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               GitHub
//             </Button>
//           )}
//           {live && (
//             <Button
//               variant="primary"
//               href={live}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Live Demo
//             </Button>
//           )}
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

const ProjectCard = ({ title, description, image, github, live }) => {
  return (
    <Card className="mb-4 shadow-sm project-card">
      {image && <Card.Img variant="top" src={image} alt={`${title} screenshot`} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between">
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

const projects = [
  {
    title: 'MERN Notes App',
    description: 'A notes app with JWT Authentication built with the MERN stack.',
    image: '/assets/notes.png',
    github: 'https://github.com/IsuruGimhana/Notes-App',
    live: 'https://notesapp.example.com',
  },
  {
    title: 'Twitter Clone',
    description: 'A Twitter clone built with the MERN stack.',
    image: '/assets/twitter-clone.png',
    github: 'https://github.com/IsuruGimhana/Twitter-Clone-MERN',
    live: 'https://twitterclone.example.com',
  },
  {
    title: 'Disney+ Clone',
    description: 'A Disney+ clone built with React and Firebase.',
    image: '/assets/disney-plus.png',
    github: 'https://github.com/IsuruGimhana/Disney-Clone',
    live: 'https://disneyplusclone.example.com',
  },
  {
    title: 'Movie Search App',
    description: 'A movie search app using the TMDB API built with React.',
    image: '/assets/movie-search.png',
    github: 'https://github.com/IsuruGimhana/Movie-Search-Website',
    live: 'https://moviesearchapp.example.com',
  },
  {
    title: 'Shopping Management System',
    description: 'A shopping management system built with Java Swing',
    image: '/assets/shopping-system.png',
    github: 'https://github.com/IsuruGimhana/OOPCW',
    live: 'https://shoppingmanagementsystem.example.com',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application built with react and firebase.',
    image: '/assets/chat-app.png',
    github: 'https://github.com/IsuruGimhana/React-Chat-App',
    live: 'https://reactchatapp.example.com',
  },
  {
    title: 'Authentication System',
    description: 'A JWT authentication system built with Node.js and Express.',
    image: '/assets/auth-system.png',
    github: 'https://github.com/IsuruGimhana/Authentication-System',
    live: 'https://authsystem.example.com',
  },
];

// const Projects = () => {
//   return (
//     <Container className="my-5">
//       <h2 className="mb-4 text-center">My Projects</h2>
//       <Row>
//         {projects.map((project, idx) => (
//           <Col md={6} lg={4} key={idx}>
//             <ProjectCard {...project} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

import "../styles/Projects.css";

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

