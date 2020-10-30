import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { featureFakeData } from '../../fakeData/fakeData';
import Feature from '../Feature/Feature';
import './About.css';

const About = () => {
    const { path } = useRouteMatch();

    return (
        <Container className="about">
            <h1 className="about-heading">Why you choose us?</h1>
            <p className="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illo voluptatum vero eveniet mollitia? Dolore rerum quibusdam impedit odio ipsam.</p>
            <Grid container spacing={2}>
                {
                    featureFakeData.map(item => <Feature key={item.id} feature={item}></Feature>)
                }
            </Grid>
        </Container>
    );
};

export default About;