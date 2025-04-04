import React, { useState } from 'react';

const CartContent = ({ product, handleRemoveItem }) => {
    const { id, img, title, name, price, quantity } = product;

    let [count, setCount] = useState(quantity);
    const total = (Number(price) * Number(count));

    const increment = (id) => {
        setCount((prevCount) => prevCount + 1);
        const existingData = JSON.parse(localStorage.getItem('shopping-cart')) || [];
        existingData.push(id); // construct required data to be stored in localstorage.
        localStorage.setItem('shopping-cart', JSON.stringify(existingData));
        window.location.reload();
    };

    const decrement = (id) => {
        setCount((prevCount) => prevCount - 1);
        const existingData = JSON.parse(localStorage.getItem('shopping-cart')) || [];
        const filteredData = existingData.filter(data => data.id !== id);
        localStorage.setItem('shopping-cart', JSON.stringify(filteredData));
        window.location.reload();
    };

    // function dlte(id) {
    //     // const id = e.parentElement.parentElement.children[0].textContent;

    //     const existingData = JSON.parse(localStorage.getItem('shopping-cart')) || [];
    //     const filteredData = existingData.filter(data => data.id !== id);
    //     localStorage.setItem('shopping-cart', JSON.stringify(filteredData));
    //     window.location.reload();
    // }


    // function add(id) {
    //     const existingData = JSON.parse(localStorage.getItem('shopping-cart')) || [];
    //     existingData.push(id); // construct required data to be stored in localstorage.
    //     localStorage.setItem('shopping-cart', JSON.stringify(existingData));
    //     window.location.reload();
    // }

    return (
        <tr className="cart_content">
            <td className="cart_image"><img src={img} alt="img" /></td>
            <td className="cart_title">{name}</td>
            <td className="cart_price">$<span className="product_per_price">{price}</span></td>
            <td className="cart_quantity">
                <div className="product_quantity_inner">
                    <span className="qty_btn product_quantity_subtract">
                        <i onClick={() => decrement(id)} className="bi bi-dash-lg"></i>
                    </span>
                    <input type="text" id="product_quantity_input" placeholder="0" value={count} />
                    <span className="qty_btn product_quantity_add">
                        <i onClick={() => increment(id)} className="bi bi-plus-lg"></i>
                    </span>
                </div>
            </td>
            <td className="cart_total">$<span className="product_total_price">{total}</span></td>
            <td onClick={() => handleRemoveItem(id)} className="cart_removal"><a href="#"><i className="bi bi-x-lg"></i></a></td>
        </tr>

    );
};

export default CartContent;