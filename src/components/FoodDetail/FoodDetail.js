import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FoodDetail.css';
import fakeData from '../../fakeData/fakeData';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CartContext } from '../../App';
import Slider from "react-slick";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(8),
    },
    foodDetail: {
        alignSelf: 'center'
    }
}));

const FoodDetail = () => {
    const classes = useStyles();
    const { foodId } = useParams();
    const item = fakeData.find(item => item.id === parseInt(foodId));
    const [displayItem, setDisplayItem] = useState(item);
    const { name, price, imageUrl, category } = displayItem;
    const [instruction, setInstruction] = useState();

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
            .then(res => res.json())
            .then(data => setInstruction(data.meals[0].strInstructions));
    }, [])

    const [count, setCount] = useState(1);
    const [cart, setCart] = useContext(CartContext);
    const handleAddToCart = (item) => {
        let isItemAdded = cart.filter(foodItem => foodItem.id === item.id);
        if (isItemAdded.length > 0) {
            const newItem = [...cart];
            newItem.find(foodItem => foodItem.id === item.id).count = count;
            setCart(newItem)
        }
        else {
            item.count = count;
            const newItem = [...cart, item];
            setCart(newItem)
        }
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 2,
        speed: 1000,
        autoplay: true,
        accessibility: true,
        autoplaySpeed: 2000,
        arrows: true,
        draggable: true,
        focusOnSelect: true,
        pauseOnHover: true,
        slidesToScroll: 1,        
    };

    return (
        <Container fixed className={classes.root}>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={6} className={classes.foodDetail}>
                    <Typography className="title" gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography className="instruction">
                        {instruction}
                    </Typography>
                    <Typography className="price">
                        ${price}
                        <p className="count">
                            <span className="count-btn" onClick={() => setCount(count > 1 ? count - 1 : 0)}>-</span>
                            {count}
                            <span className="count-btn" onClick={() => setCount(count + 1)}>+</span>
                        </p>
                    </Typography>
                    <Button
                        onClick={() => { handleAddToCart(item) }}
                        variant="contained" color="secondary" className="addToCartBtn"
                    >
                        <ShoppingCartOutlinedIcon style={{ marginRight: '5px' }} /> Add
                    </Button>
                    <div>
                        <Slider {...settings}>
                            {
                                fakeData.filter(item => item.category === category).map(item => {
                                    return (
                                        <div>
                                            <img onClick={() => setDisplayItem(item)} className="carousel-image" src={item.imageUrl} alt=""/>
                                        </div>
                                    );
                                })
                            }
                        </Slider>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={imageUrl} alt="" style={{ width: '95%', marginLeft: 'auto' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default FoodDetail;
