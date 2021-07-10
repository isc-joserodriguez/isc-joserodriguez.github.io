import React from 'react';

import { Container } from 'react-bootstrap';

import GridSkills from './GridSkills';

import classes from './index.module.css';

const Skills = ({
    title,
    language,
    db,
    css,
    framework,
    cloud,
    other
}) => (
    <section id='skills' className={classes.Skills}>
        <Container>
            <hr className={classes.Divisor} />
            <h3 className={classes.Title}>{title}</h3>
            <GridSkills title={language.title} technologies={language.technologies} />
            <GridSkills title={db.title} technologies={db.technologies} />
            <GridSkills title={css.title} technologies={css.technologies} />
            <GridSkills title={framework.title} technologies={framework.technologies} />
            <GridSkills title={cloud.title} technologies={cloud.technologies} />
            <GridSkills title={other.title} technologies={other.technologies} />

        </Container>
    </section>
)


export default Skills;