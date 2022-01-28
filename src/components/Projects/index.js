import React from 'react';

import { Container, Col, Row, Image } from 'react-bootstrap';
import { FaGithub, FaLink } from "react-icons/fa";

import classes from './index.module.css';

const Projects = ({ title, projects }) => (
  <section id='projects' className={classes.Projects}>
    <Container>
      <h3 className={classes.Title}>{title}</h3>
      <Row>
        {projects.map(project => {
          return <Col key={project.id} sm='12' lg='6' className='d-flex justify-content-center align-items-center'>
            <div className={`${classes.FlipCard} my-sm-5 my-lg-3`}>
              <div className={classes.FlipCardInner}>
                <div className={classes.FlipCardFront}>
                  <Image src={project.image} alt={`${project.name}-image`} fluid />
                </div>
                <div className={classes.FlipCardBack}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <Row>
                    <div className={classes.LinksDiv}>
                      <a className={classes.Link} href={project.url} target='_blank' rel='noreferrer'><FaGithub className='my-auto' /> Web</a>
                      <a className={classes.Link} href={project.repo} target='_blank' rel='noreferrer'><FaLink className='my-auto' /> Repo</a>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        })}
      </Row>
    </Container>
  </section>
);

export default Projects;