import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ShippingContext } from '../../App';
import './ShippingForm.css';

const ShippingForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [shippingInfo, setShippingInfo] = useContext(ShippingContext);
    const onSubmit = data => setShippingInfo(data);

    return (
        <div>
            <h2>Edit Delivery Details</h2>
            <div className="border-line"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="AddressLine1" ref={register({ required: true })} placeholder="Address Line 1" />
                {errors.AddressLine1 && <p style={{ color: 'red', paddingBottom: '10px' }}>This field is required</p>}
                <input type="text" name="AddressLine2" ref={register({ required: true })} placeholder="Address Line 2" />
                {errors.AddressLine2 && <p style={{ color: 'red', paddingBottom: '10px' }}>This field is required</p>}
                <input type="text" name="BusinessName" ref={register({ required: true })} placeholder="Business Name" />
                {errors.BusinessName && <p style={{ color: 'red', paddingBottom: '10px' }}>This field is required</p>}
                <input type="text" name="Phone" ref={register({ required: true })} placeholder="Phone Number" />
                {errors.Phone && <p style={{ color: 'red', paddingBottom: '10px' }}>This field is required</p>}
                <input type="text" name="DeliveryInstructor" ref={register({ required: true })} placeholder="Add Delivery Instructor" />
                {errors.DeliveryInstructor && <p style={{ color: 'red', paddingBottom: '10px' }}>This field is required</p>}
                <input className='submitBtn' type="submit" value="Save & Continue" />
            </form>
        </div>
    );
};

export default ShippingForm;