import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';

import classes from './index.module.css';

const Work = ({ title, works, more }) => (
  <section id='work' className={classes.Work}>
    <Container>
      <h3 className={classes.Title}>{title}</h3>
      {works.map(work => (
        <Row key={work.id} className='py-3'>
          <Col sm='4' className='d-flex justify-content-center align-items-center'>
            <a href={work.url} target='_blank' rel='noreferrer' >
              <Image className={classes.Logo} src={work.logo} />
            </a>
          </Col>
          <Col sm='8'>
            <h3>{work.company}</h3>
            <p className='text-muted fst-italic'>{work.position}</p>
            <p className={classes.Description}>{work.description}</p>
          </Col>
        </Row>
      ))}
      <a className={classes.More} href='https://www.linkedin.com/in/isc-joserodriguez/' target='_blank' rel='noreferrer'>{more}</a>
    </Container>
  </section>
);

export default Work
