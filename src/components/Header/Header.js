import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';
import { Container } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '10px 0px'
    },
    background: {
        backgroundColor: 'white',
        boxShadow: '0px 0px'
    },
    title: {
        flexGrow: 1,
    },
    cartIcon: {
        marginLeft: 'auto',
        color: '#222'
    },
}));

const btnSpacing = {
    margin: '0px 15px'
}

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.background} disableElevation>
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start" aria-label="menu">
                            <img className="logo" src="https://i.ibb.co/0yjGfSD/logo2.png" alt="logo2" />
                        </IconButton>
                        <ShoppingCartOutlinedIcon className={classes.cartIcon} />
                        <Button style={btnSpacing}>Login</Button>
                        <Button style={btnSpacing} variant="contained" color="secondary" className="main-button">Sign up</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;