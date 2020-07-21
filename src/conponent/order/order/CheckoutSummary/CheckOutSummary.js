import React from 'react';
import Burger from '../../../Buger/Burger';
import Button from '../../../ui/buttom/button';
import './CheckOutSummary.css'

const checkOutSummary = (props) => {
    return (
        <div className='CheckOutSummary'>
            <h1>we hope it taste is well</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
                <Button  btntype='Danger' clicked={props.checkoutCancelled}>Cancel</Button>
                <Button  btntype='Success' clicked={props.checkoutContinued}>Continue</Button>
        </div>
                
    );
};
export default checkOutSummary;