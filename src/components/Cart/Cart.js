import React, { useContext } from 'react';
import { CartContext, ShippingContext } from '../../App';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './Cart.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ShippingForm from '../ShippingForm/ShippingForm';
import CartItem from '../CartItem/CartItem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(8),
    },
    cartInfo: {
        marginLeft: theme.spacing(10)
    },
    boldText: {
        fontWeight: 'bold'
    }
}));

const Cart = () => {
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);
    const [shippingInfo, setShippingInfo] = useContext(ShippingContext);
    
    const history = useHistory();
    const handlePlaceOrder = e => {
        if(cart.length > 0 && shippingInfo.AddressLine1) {
            history.push('/shipping');
        }
        e.preventDefault();
    }

    const subTotal = Number(cart.map(item => item.price * item.count)
        .reduce((total, item) => total + item, 0)
        .toFixed(2));
    const tax = Number((subTotal * 0.05).toFixed(2));
    const deliveryFee = subTotal === 0 ? 0 : subTotal > 100 ? 2 : 5; 
    const total = Number((subTotal + tax + deliveryFee).toFixed(2));

    return (
        <Container fixed className={classes.root}>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={6} className={classes.centerAlign}>
                    <ShippingForm></ShippingForm>
                </Grid>
                <Grid className={classes.cartInfo} item xs={12} sm={4}>
                    {
                        shippingInfo.AddressLine1 && 
                        <div style={{marginBottom: '10px', marginLeft: '10px'}}>
                            <p style={{marginBottom: '10px', marginTop: '40px'}}>
                                From <span className={classes.boldText}>Gulshan Plaza Restaurant GPR</span>
                            </p>
                            <p style={{marginBottom: '10px'}}>
                                To <span className={classes.boldText}>{shippingInfo.AddressLine1 + ' ' + shippingInfo.AddressLine2}</span>
                            </p>
                            <p style={{marginBottom: '10px'}}>Arriving In 20-39 min</p>
                        </div>
                    }
                    {
                        cart.map(item => <CartItem key={item.id} item={item}></CartItem>)                  
                    }
                    <p className="calculation">Subtotal: <span className="amount">${subTotal}</span></p>
                    <p className="calculation">Tax: <span className="amount">${tax}</span></p>
                    <p className="calculation">Delivery fee: <span className="amount">${deliveryFee}</span></p>
                    <p className="calculation">Total: <span className="amount">${total}</span></p>
                    <Button className="order-btn" variant="contained" 
                        color={(shippingInfo.AddressLine1 && cart.length > 0) ? "secondary" : ""}
                        onClick={handlePlaceOrder}>
                        Place Order
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cart;