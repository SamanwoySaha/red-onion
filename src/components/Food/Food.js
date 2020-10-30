import React from 'react';
import './Food.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '100%',
    },
    cardContent: {
        flexGrow: 1,
        textAlign: 'center',
    }
}));

const Food = ({item}) => {
    const {name, description, price, imageUrl, id} = item;
    const classes = useStyles();

    const history = useHistory();
    const handleClick = (foodId) => {
        history.push(`/foodDetail/${foodId}`)
    }

    return (
        <Grid item xs={12} sm={6} md={4} className="food-container">
            <Card className={[classes.card, 'foodItem'].join(' ')} onClick={() => handleClick(id)}>
                <CardMedia
                    className={[classes.cardMedia, 'foodImg'].join(' ')}
                    image={imageUrl}
                    title="Image title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className="food-title">
                        {name}
                    </Typography>
                    <Typography className="food-description">
                        {description}
                    </Typography>
                    <Typography className="food-price">
                        ${price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Food;