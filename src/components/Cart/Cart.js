import React from 'react';

const Cart = ({ cart }) => {
    console.log('cart rendering', cart);
    const quantity = cart.reduce((a, b) => a + b.quantity, 0);
    const total = cart.reduce((a, b) => a + (b.price * b.quantity), 0);
    const shipping = cart.reduce((a, b) => a + b.shipping, 0);
    const tax = total * 0.15;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered : {quantity}</h4>
            <p>Total : {total.toFixed(2)}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Shipping : {quantity > 0 ? shipping : 0}</p>
            <p>Grand Total : {quantity > 0 ? grandTotal.toFixed(2) : 0}</p>
        </div>
    );
};
export default Cart;