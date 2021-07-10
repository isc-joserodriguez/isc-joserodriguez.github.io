import React from 'react';

import { Container, Row } from 'react-bootstrap';
import { FaChevronCircleUp } from 'react-icons/fa';

import Sites from '../Sites';

import classes from './index.module.css';

const Footer = ({ sites, copyright }) => {
    console.log(sites)
    return (
        <footer className={classes.Footer}>
            <Container className='pt-5 pb-2 text-center'>
                <Row className={classes.Home}>
                    <a className='text-center' href='#home'>
                        <FaChevronCircleUp />
                    </a>
                </Row>
                <div className='d-flex justify-content-center align-items-center'>
                    <Sites sites={sites} />
                </div>
                <br />
                <p className='text-muted'>
                    {copyright}
                </p>
            </Container>
        </footer>
    )
}

export default Footer;