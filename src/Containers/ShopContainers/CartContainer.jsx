import React from 'react';

const CartContainer = () => {

    return (
        <div class="main_wrapper">
            <div class="section shopping_cart">
                <div class="container">
                    <form action="checkout.php" method="POST">
                        <table class="cart_table">
                            <tr class="cart_header">
                                <th class="cart_header_image">Image</th>
                                <th class="cart_header_title">Product Name</th>
                                <th class="cart_header_price">Price</th>
                                <th class="cart_header_quantity">Quantity</th>
                                <th class="cart_header_total">SubTotal</th>
                                <th class="cart_header_removal"></th>
                            </tr>
                            <tr class="cart_content">
                                <td class="cart_image"><img src="images/shop/products/1-1.jpg" alt="" /></td>
                                <td class="cart_title">Traffic Cone</td>
                                <td class="cart_price">$<span class="product_per_price">15</span></td>
                                <td class="cart_quantity">
                                    <div class="product_quantity_inner">
                                        <span class="product_quantity_subtract">
                                            <i class="ion-android-remove"></i>
                                        </span>
                                        <input type="text" id="product_quantity_input" placeholder="0" value="1" />
                                        <span class="product_quantity_add">
                                            <i class="ion-android-add"></i>
                                        </span>
                                    </div>
                                </td>
                                <td class="cart_total">$<span class="product_total_price">15</span></td>
                                <td class="cart_removal"><a href="#"><i class="ion-android-close"></i></a></td>
                            </tr>
                            <tr class="cart_content">
                                <td class="cart_image"><img src="images/shop/products/2-1.jpg" alt="" /></td>
                                <td class="cart_title">Safty Helmet</td>
                                <td class="cart_price">$<span class="product_per_price">17</span></td>
                                <td class="cart_quantity">
                                    <div class="product_quantity_inner">
                                        <span class="product_quantity_subtract">
                                            <i class="ion-android-remove"></i>
                                        </span>
                                        <input type="text" id="product_quantity_input" placeholder="0" value="1" />
                                        <span class="product_quantity_add">
                                            <i class="ion-android-add"></i>
                                        </span>
                                    </div>
                                </td>
                                <td class="cart_total">$<span class="product_total_price">17</span></td>
                                <td class="cart_removal"><a href="#"><i class="ion-android-close"></i></a></td>
                            </tr>
                            <tr class="cart_content">
                                <td class="cart_image"><img src="images/shop/products/3-1.jpg" alt="" /></td>
                                <td class="cart_title">Traffic Cone</td>
                                <td class="cart_price">$<span class="product_per_price">15</span></td>
                                <td class="cart_quantity">
                                    <div class="product_quantity_inner">
                                        <span class="product_quantity_subtract">
                                            <i class="ion-android-remove"></i>
                                        </span>
                                        <input type="text" id="product_quantity_input" placeholder="0" value="1" />
                                        <span class="product_quantity_add">
                                            <i class="ion-android-add"></i>
                                        </span>
                                    </div>
                                </td>
                                <td class="cart_total">$<span class="product_total_price">15</span></td>
                                <td class="cart_removal"><a href="#"><i class="ion-android-close"></i></a></td>
                            </tr>
                            <tr class="cart_content">
                                <td class="cart_image"><img src="images/shop/products/4-2.jpg" alt="" /></td>
                                <td class="cart_title">Safty Helmet</td>
                                <td class="cart_price">$<span class="product_per_price">17</span></td>
                                <td class="cart_quantity">
                                    <div class="product_quantity_inner">
                                        <span class="product_quantity_subtract">
                                            <i class="ion-android-remove"></i>
                                        </span>
                                        <input type="text" id="product_quantity_input" placeholder="0" value="1" />
                                        <span class="product_quantity_add">
                                            <i class="ion-android-add"></i>
                                        </span>
                                    </div>
                                </td>
                                <td class="cart_total">$<span class="product_total_price">17</span></td>
                                <td class="cart_removal"><a href="#"><i class="ion-android-close"></i></a></td>
                            </tr>
                        </table>
                        <div class="couponcart">
                            <div class="set_coupon">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="coupon" placeholder="Coupon Code" />
                                </div>
                                <div class="button_group">
                                    <input class="button" type="submit" value="Apply Coupon" name="submit" />
                                </div>
                            </div>
                            <div class="cartupdate">
                                <div class="button_group">
                                    <input class="button alt" type="submit" value="Update Cart" name="submit" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="grand_total">
                                <h3 class="card_title">Card Total</h3>
                                <ul>
                                    <li><span class="text">Subtotal</span> <span class="value total_price">$1500</span></li>
                                    <li><span class="text">Tax (10%)</span> <span class="value">$150</span></li>
                                    <li><span class="text">Shipping</span> <span class="value">Enter your address to view shipping options.
                                        Calculate Shipping</span></li>
                                    <li class="totalvalue"><span class="text">Total</span> <span class="value">$1700</span></li>
                                </ul>
                                <div class="button_group">
                                    <input class="button alt" type="submit" value="Proceed To Checkout" name="submit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartContainer;