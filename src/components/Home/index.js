import React from 'react';

import Sites from '../Sites';

import { Row, Container } from 'react-bootstrap';
import { FaChevronCircleDown } from 'react-icons/fa';

import classes from './index.module.css';

const index = ({ title,
  subtitle,
  description,
  sites }) => (
  <section id='home' className={`${classes.Home} pt-5`}>
    <Container>
      <Row className={`${classes.Banner} align-items-center mt-5 p-5`}>
        <div className={`${classes.Text} text-center`}>
          <h1 className={classes.Title}>{title}</h1>
          <h3>{subtitle}</h3>
          <h4> {description} </h4>
          <hr />
          <Sites sites={sites} />
        </div>
      </Row>
      <Row className={classes.Next}>
        <a className='text-center' href='#about'>
          <FaChevronCircleDown />
        </a>
      </Row>
    </Container>
  </section>
);

export default index;