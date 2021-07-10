import React from 'react'

import { Col, Row, Image } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';


import classes from './index.module.css'


const GridSkills = ({ title, technologies }) => (
    <>
        <h5 className={classes.Title}> {title} </h5>
        <Row className='py-3'>
            {technologies.map(tech => (
                <Col key={tech.id} sm='3' className='d-flex justify-content-center align-items-center p-3'>
                    <a href={tech.url} target='_blank' rel='noreferrer' >
                        <Image data-tip={tech.name} className={classes.Icon} src={tech.icon} />
                        <ReactTooltip />
                    </a>
                </Col>
            )
            )}
        </Row>
    </>
);

export default GridSkills
