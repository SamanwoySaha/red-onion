import { Button } from '@material-ui/core';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <h1 className="heading">Best food waiting for your belly</h1>
            <form className="search-area">
                <input type="text" name="foodTerm" placeholder="Search food items"/>
                <Button className="main-button" variant="contained" color="secondary">Search</Button>
            </form>
        </div>
    );
};

export default Banner;