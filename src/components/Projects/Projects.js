import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import estateVision from "../../Assets/Projects/estatevision.png";
import snapsell from "../../Assets/Projects/snapsell.png";
import r2d from "../../Assets/Projects/r2d.png";
import ebook from "../../Assets/Projects/e-book.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estateVision}
              isBlog={false}
              title="EstateVision (... Dev Phase)"
              description="An interactive platform for analyzing real estate sale trends, built with Django, HTML, CSS, and Bootstrap. Features data analysis algorithms to provide insights into client demographics, enabling smarter decision-making for real estate professionals. Developed with a focus on seamless backend and frontend integration using Agile practices."
              ghLink="https://github.com/Saghri/Estate-Vision"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snapsell}
              isBlog={false}
              title="SnapSell"
              description="Developed secure payment and personalized recommendation features for an AI-powered e-commerce platform. Built responsive and user-friendly interfaces using the MERN stack. Integrated AI-driven fraud detection and a customer service chatbot to enhance security and user experience."
              ghLink="https://github.com/Muneeb-hub411/SnapSell"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={r2d}
              isBlog={false}
              title="Rent2Drive"
              description="Designed and developed a user-friendly car rental website with an intuitive interface, streamlining the booking process and improving the overall customer experience."
              ghLink="https://github.com/Saghri/r2d"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebook}
              isBlog={false}
              title="E-Book"
              description="Developed an engaging online bookstore platform that enables users to browse, search, and purchase books with ease, offering a seamless shopping experience for book enthusiasts."
              ghLink="https://github.com/Saghri/E-Book-Store"
              // demoLink="https://youtube.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
