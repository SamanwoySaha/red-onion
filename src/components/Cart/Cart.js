import React, { useContext } from 'react';
import { CartContext, ShippingContext } from '../../App';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './Cart.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(8),
    },
    centerAlign: {
        alignSelf: 'center'
    },
    submitBtn: {
        backgroundColor: '#F91944',
        color: 'white',
        fontSize: '16px'
    },
    cartInfo: {
        marginLeft: theme.spacing(10)
    }
}));

const Cart = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);
    const [shippingInfo, setShippingInfo] = useContext(ShippingContext);

    const onSubmit = data => {
        console.log(data);
    };

    const history = useHistory();
    const handlePlaceOrder = e => {
        if(cart.length > 0 && shippingInfo) {
            history.push('/shipping');
        }
        e.preventDefault();
    }

    const subTotal = Number(cart.map(item => item.price)
        .reduce((total, item) => total + item, 0)
        .toFixed(2));
    const tax = Number((subTotal * 0.05).toFixed(2));
    const deliveryFee = subTotal === 0 ? 0 : subTotal > 100 ? 2 : 5; 
    const total = Number((subTotal + tax + deliveryFee).toFixed(2));

    return (
        <Container fixed className={classes.root}>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={6} className={classes.centerAlign}>
                    <h2>Edit Delivery Details</h2>
                    <div className="border-line"></div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" name="AddressLine1" ref={register({ required: true })} placeholder="Address Line 1"/>
                        {errors.AddressLine1 && <p style={{color: 'red', paddingBottom: '10px'}}>This field is required</p>}
                        <input type="text" name="AddressLine2" ref={register({ required: true })} placeholder="Address Line 2"/>
                        {errors.AddressLine2 && <p style={{color: 'red', paddingBottom: '10px'}}>This field is required</p>}
                        <input type="text" name="BusinessName" ref={register({ required: true })} placeholder="Business Name"/>
                        {errors.BusinessName && <p style={{color: 'red', paddingBottom: '10px'}}>This field is required</p>}
                        <input type="text" name="Phone" ref={register({ required: true })} placeholder="Phone Number"/>
                        {errors.Phone && <p style={{color: 'red', paddingBottom: '10px'}}>This field is required</p>}
                        <input type="text" name="DeliveryInstructor" ref={register({ required: true })} placeholder="Add Delivery Instructor"/>
                        {errors.DeliveryInstructor && <p style={{color: 'red', paddingBottom: '10px'}}>This field is required</p>}
                        <input className={classes.submitBtn} type="submit" value="Save & Continue"/>
                    </form>
                </Grid>
                <Grid className={classes.cartInfo} item xs={12} sm={4}>
                    {
                        cart.map(item => {
                            const {name, price, imageUrl, count} = item;    
                            return (
                                <Grid className="cartItem">
                                    <Grid item xs={3} className={classes.centerAlign}>
                                        <img src={imageUrl} className="cart-image" alt=""/>
                                    </Grid>
                                    <Grid item xs={6} className="itemInfo">
                                        <h6>{name}</h6>
                                        <p>{price}</p>
                                    </Grid>
                                    <Grid item xs={3} className="quantity">
                                        <p><span>-</span><span className="quantity-text">{count}</span><span>+</span></p>
                                    </Grid>
                                </Grid>
                            )
                        })                    
                    }
                    <p className="calculation">Subtotal: <span className="amount">${subTotal}</span></p>
                    <p className="calculation">Tax: <span className="amount">${tax}</span></p>
                    <p className="calculation">Delivery fee: <span className="amount">${deliveryFee}</span></p>
                    <p className="calculation">Total: <span className="amount">${total}</span></p>
                    <Button className="order-btn" variant="contained" color={shippingInfo ? "secondary" : ""} onClick={handlePlaceOrder}>Place Order</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cart;