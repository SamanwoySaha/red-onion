import { Button, Card, CardContent, CardMedia, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import './Feature.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import TrainIcon from '@material-ui/icons/Train';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px'
    },
    cardMedia: {
        paddingTop: '56.25%',
        transform: 'scale(1)'
    },
    cardContent: {
        flexGrow: 1,
        textAlign: 'center',
        marginTop: '10px',
        marginRight: '10px',
        marginLeft: '10px'
    }
}));

const Feature = (props) => {
    const { name, description, icon, imageUrl } = props.feature;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card className={[classes.card, 'feature-container'].join(' ')}>
                <CardMedia
                    className={classes.cardMedia}
                    image={imageUrl}
                    title="Image title"
                />
                <CardContent className={[classes.cardContent, 'feature-info'].join(' ')}>
                    {
                        name === 'Fast Delivery' 
                            ? <TrainIcon className="feature-icon" />
                            : name === 'A Good Auto Responder' 
                                ? <NotificationsNoneIcon className="feature-icon" />
                                : name === 'Home Delivery'
                                    ? <LocalShippingIcon className="feature-icon" /> 
                                    : null
                    }
                    <div>
                        <h4 variant="h5" component="h2" className="feature-title">
                            {name}
                        </h4>
                        <p className="feature-description">
                            {description}
                        </p>
                        <Button className="seeMore-btn" align>
                            See more
                            <img className="seeMore-icon" src="https://img.icons8.com/flat_round/64/000000/arrow-right.png" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Feature;