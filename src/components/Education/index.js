import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';

import classes from './index.module.css';

const Education = ({ title, educations }) => (
  <section id='education' className={classes.Education}>
    <Container>
      <h3 className={classes.Title}>{title}</h3>
      {educations.map(education => (
        <Row key={education.id} className='py-3'>
          <Col sm='4' className='d-flex justify-content-center align-items-center'>
            <a href={education.url} target='_blank' rel='noreferrer'>
              <Image className={classes.Logo} src={education.logo} />
            </a>
          </Col>
          <Col sm='8'>
            <h3>{education.institution}</h3>
            <p className='text-muted fst-italic'>{education.info}</p>
            <p className={classes.Description}>{education.description}</p>
          </Col>
        </Row>
      ))}
    </Container>
  </section>
);

export default Education
