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
            <GridSkills id={language.id} title={language.title} technologies={language.technologies} />
            <GridSkills id={db.id} title={db.title} technologies={db.technologies} />
            <GridSkills id={framework.id} title={framework.title} technologies={framework.technologies} />
            <GridSkills id={css.id} title={css.title} technologies={css.technologies} />
            <GridSkills id={cloud.id} title={cloud.title} technologies={cloud.technologies} />
            <GridSkills id={other.id} title={other.title} technologies={other.technologies} />
        </Container>
    </section>
)


export default Skills;