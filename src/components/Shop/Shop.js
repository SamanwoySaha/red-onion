import React, { useContext, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './Shop.css';
import fakeData from '../../fakeData/fakeData';
import Food from '../Food/Food';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { CartContext } from '../../App';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    category: {
        textAlign: 'center',
        marginTop: theme.spacing(8)
    }
}));

const Shop = () => {
    const classes = useStyles();
    const [currentCategory, setCurrentCategory] = useState('lunch');
    const [cart, setCart] = useContext(CartContext);
    const history = useHistory();
    const handleCheckout = () => {
        if(cart.length > 0){
            history.push('/cart')
        }
        return;
    }

    return (
        <div>
            <Typography className={classes.category}>
                <Link className='singleCategory' onClick={() => setCurrentCategory('breakfast')}>Breakfast</Link>
                <Link className='singleCategory' onClick={() => setCurrentCategory('lunch')} >Lunch</Link>
                <Link className='singleCategory' onClick={() => setCurrentCategory('dinner')} >Dinner</Link>
            </Typography>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Grid container spacing={10}>
                    {
                        fakeData.filter(item => item.category === currentCategory)
                            .map(item => <Food key={item.id} item={item}></Food>)
                    }
                </Grid>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick= {handleCheckout}
                    className='checkoutBtn'>
                    Checkout Your Food
                </Button>
            </Container>
        </div>
    );
};

export default Shop;