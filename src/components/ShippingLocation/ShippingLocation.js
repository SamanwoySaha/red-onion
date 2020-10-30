import React from 'react'
import './ShippingLocation.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { API_KEY } from './config';

const containerStyle = {
    width: '680px',
    height: '680px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const ShippingLocation = () => {
    return (
        <LoadScript
            googleMapsApiKey={`${API_KEY}`}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
            </GoogleMap>
        </LoadScript>
    )
}

export default ShippingLocation;