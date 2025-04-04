import React from 'react';

const CartHeader = () => {
    return (
        <tr className="cart_header">
            <th className="cart_header_image">Image</th>
            <th className="cart_header_title">Product Name</th>
            <th className="cart_header_price">Price</th>
            <th className="cart_header_quantity">Quantity</th>
            <th className="cart_header_total">SubTotal</th>
            <th className="cart_header_removal"></th>
        </tr>
    );
};

export default CartHeader;