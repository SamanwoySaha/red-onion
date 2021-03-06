import React, { useContext } from 'react';
import './ShippingDetail.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { ShippingContext } from '../../App';
import ShippingLocation from '../ShippingLocation/ShippingLocation';

const ShippingDetail = () => {
    const [shippingInfo] = useContext(ShippingContext);
    const {AddressLine1, AddressLine2, DeliveryInstructor} = shippingInfo;
    return (
        <Container fixed>
            <Grid container className="shipping-info">
                <Grid item xs={8}>
                    <ShippingLocation></ShippingLocation>
                </Grid>
                <Grid item xs={4} className="shipping-info-text">
                    <img src="https://i.ibb.co/gFV8sjt/Group-1151.png" className="icon" alt="icon" />
                    <div className="timeline-container">
                        <Timeline className="timeline">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="secondary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <h4>Your Location</h4>
                                    <p>{AddressLine1 + ' ' + AddressLine2}</p>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="secondary" />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <h4>Shop Address</h4>
                                    <p>Gulshan Plaza Restaurant GPR</p>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <h2>09:30 AM</h2>
                    <p>Estimated Delivery Time</p>
                    <div className="user-info">
                        <img className="user-icon" src="https://i.ibb.co/nmNP6Rh/Group-1152.png" alt="Group-1152" />
                        <div>
                            <h5>{DeliveryInstructor}</h5>
                            <p>Your Raider</p>
                        </div>
                    </div>
                    <Button className="contact-btn" variant="contained" color="secondary">Contact</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ShippingDetail;