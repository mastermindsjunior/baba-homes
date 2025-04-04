
const Checkout = () => {
    return (
        <div className="main_wrapper">
            <div className="section shopping_cart">
                <div className="container">
                    <div className="shipping_form">
                        <form action="checkout.php" method="POST">
                            <div className="have_coupon">
                                <div className="form-group">
                                    <label for="fname">Have a coupon?</label>
                                    <input type="text" className="form-control" id="couponcode" name="couponcode" placeholder="Enter Coupon Code" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 pe-5">
                                    <h3 className="card_title">Billing Address</h3>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label for="fname">First Name *</label>
                                                <input type="text" className="form-control" id="fname" name="fname" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label for="lname">Last Name *</label>
                                                <input type="text" className="form-control" id="lname" name="lname" placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="cname">Company Name (Optional)</label>
                                        <input type="text" className="form-control" id="cname" name="company" placeholder="Company Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="country">Country / Region *</label>
                                        <select className="basic_select" id="country">
                                            <option value="1">United State America</option>
                                            <option value="2">Country 2</option>
                                            <option value="3">Country 3</option>
                                            <option value="4">Country 4</option>
                                            <option value="5">Country 5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="address">Street Address *</label>
                                        <input type="text" className="form-control" id="address" name="address" placeholder="32 Madison Street" />
                                    </div>
                                    <div className="form-group">
                                        <label for="address">Apartment / Unit (Optional)</label>
                                        <input type="text" className="form-control" id="unit" name="unit" placeholder="Unit 4" />
                                    </div>
                                    <div className="form-group">
                                        <label for="address">Post Code / Zip *</label>
                                        <input type="text" className="form-control" id="zip" name="zip" placeholder="909832" />
                                    </div>
                                    <div className="form-group">
                                        <label for="city">Town / City *</label>
                                        <select className="basic_select" id="city">
                                            <option value="1">New York</option>
                                            <option value="2">Washington DC</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="state">State *</label>
                                        <select className="basic_select" id="state">
                                            <option value="1">Utah</option>
                                            <option value="2">Arizona</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" className="form-control" id="phone" name="phone" placeholder="012345" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="mail@domain.com" />
                                    </div>

                                    <div className="additional_info mt-5">
                                        <h3 className="card_title">Additional Information</h3>
                                        <div className="form-group">
                                            <label for="notes">Order Notes (Optional)</label>
                                            <textarea id="notes" name="notes" className="form-control" placeholder="Notes About your order & delivery"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="place_order">
                                        <h3 className="card_title">Your Order</h3>
                                        <ul>
                                            <li className="totalvalue"><span className="text">Product</span> <span className="value">Price</span></li>
                                            <li><span className="text">Safty Helmet x 1</span> <span className="value">$21</span></li>
                                            <li><span className="text">Safty Helmet x 1</span> <span className="value">$29</span></li>
                                            <li><span className="text">Safty Helmet x 1</span> <span className="value">$50</span></li>
                                            <li><span className="text">Safty Helmet x 1</span> <span className="value">$40</span></li>
                                            <li><span className="text">Safty Helmet x 1</span> <span className="value">$30</span></li>
                                            <li className="totalvalue"><span className="text">Subtotal</span> <span className="value">$170</span></li>
                                            <li className="totalvalue">
                                                <span className="text">Shipping</span>
                                                <div className="form-group">
                                                    <label className="radio_circle">Flat Rate
                                                        <input type="radio" checked="checked" name="shipping" value="cash" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label className="radio_circle">Free Shipping
                                                        <input type="radio" name="shipping" value="card" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label className="radio_circle">Local Pickup
                                                        <input type="radio" name="shipping" value="online" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className="totalvalue"><span className="text">Total</span> <span className="value">$250</span></li>
                                        </ul>
                                        <div className="form-group paymentmethod">
                                            <label className="radio_circle">Direct Bank Transfer
                                                <input type="radio" checked="checked" name="paymethod" value="cash" />
                                                <span className="checkmark"></span>
                                                <span className="text">Make your payment directly into our bank account. Please use your
                                                    Order ID as the payment reference. Your order will not be shipped
                                                    until the funds have cleared in our account.</span>
                                            </label>
                                            <label className="radio_circle">Check Payment
                                                <input type="radio" name="paymethod" value="card" />
                                                <span className="checkmark"></span>
                                                <span className="text">Your personal data will be used to process your order, support your
                                                    experience throughout this website, and for other purposes described
                                                    in our privacy policy.</span>
                                            </label>
                                        </div>
                                        <div className="button_group">
                                            <input className="button" type="submit" value="Place Order" name="submit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;