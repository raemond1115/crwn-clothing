import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './checkout.styles.scss';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.componet';

const Checkout = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>
        </div>
        <div className='header-block'>
            <span>Description</span>
        </div>
        <div className='header-block'>
            <span>Quantity</span>
        </div>
        <div className='header-block'>
            <span>Price</span>
        </div>
        <div className='header-block'>
            <span>Remove</span>
        </div>
        </div>
        {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
        <div class='test-warning'>
            *Please use the following test credit card for payment
            <br/>
            4242 4242 4242 4242 - ExL 10/20 CW: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

//Testing Card number 4242424242424242 Exp 01/20 CW 123

const mapStateToProp = createStructuredSelector(
    {cartItems: selectCartItems,
    total: selectCartTotal}
)

export default connect(mapStateToProp)(Checkout);