import React from 'react';
import './CartItem.css';
import { Grid } from '@material-ui/core';

const CartItem = ({item}) => {
    const {name, price, imageUrl, count} = item;  
    return (
        <Grid className="cartItem">
            <Grid item xs={3} style={{ alignSelf: 'center' }}>
                <img src={imageUrl} className="cart-image" alt="" />
            </Grid>
            <Grid item xs={6} className="itemInfo">
                <h6>{name}</h6>
                <p>{price}</p>
            </Grid>
            <Grid item xs={3} className="quantity">
                <p><span>-</span><span className="quantity-text">{count}</span><span>+</span></p>
            </Grid>
        </Grid>
    );
};

export default CartItem;