import React from 'react';

import { Col, Row, Container, Image } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

import CV from '../../assets/doc/CV-Jose-Rodriguez.pdf'

import classes from './index.module.css';

const About = ({
    title,
    image,
    description,
    downloadMessage
}) => (
    <section id='about' className={classes.About}>
        <Container>
            <Row>
                <Col lg='3' className='d-flex justify-content-center'>
                    <Image src={image} />
                </Col>
                <Col lg='9'>
                    <h2>{title}</h2>
                    <p className={classes.Description}>{description}</p>
                    <Row>
                        <Col>
                            <p className='text-center'>
                                <a className="btn btn-success" href={CV} download>
                                    <FaDownload /> {downloadMessage}
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>

);

export default About
