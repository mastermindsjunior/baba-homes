import React from 'react';

const CheckoutForm = () => {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const email = form.email.value;
        const state = form.state.value;
        const city = form.city.value;
        const country = form.country.value;
        const address = form.address.value;

        //     signin(email, password)
        //         .then(result => {
        //             toast.success('Login Success!')
        //             Navigate(from, { replace: true })
        //             console.log(result.user)
        //         })
        //         .catch(error => toast.error(error.message))

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label for="fname">First Name *</label>
                        <input type="text" className="form-control" id="fname" name="fname" placeholder="First Name" required />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label for="lname">Last Name *</label>
                        <input type="text" className="form-control" id="lname" name="lname" placeholder="Last Name" required />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label for="cname">Company Name (Optional)</label>
                <input type="text" className="form-control" id="cname" name="company" placeholder="Company Name" />
            </div>
            <div className="form-group">
                <label for="country">Country / Region *</label>
                <select className="basic_select" id="country" required>
                    <option value="1">United State America</option>
                    <option value="2">Country 2</option>
                    <option value="3">Country 3</option>
                    <option value="4">Country 4</option>
                    <option value="5">Country 5</option>
                </select>
            </div>
            <div className="form-group">
                <label for="address">Street Address *</label>
                <input type="text" className="form-control" id="address" name="address" placeholder="32 Madison Street" required />
            </div>
            <div className="form-group">
                <label for="address">Apartment / Unit (Optional)</label>
                <input type="text" className="form-control" id="unit" name="unit" placeholder="Unit 4" />
            </div>
            <div className="form-group">
                <label for="address">Post Code / Zip *</label>
                <input type="text" className="form-control" id="zip" name="zip" placeholder="909832" required />
            </div>
            <div className="form-group">
                <label for="city">Town / City *</label>
                <select className="basic_select" id="city" required>
                    <option value="1">New York</option>
                    <option value="2">Washington DC</option>
                </select>
            </div>
            <div className="form-group">
                <label for="state">State *</label>
                <select className="basic_select" id="state" required>
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
                <h4 className="widget-title">Additional Information <span className="title-line"></span></h4>
                <div className="form-group">
                    <label for="notes">Order Notes (Optional)</label>
                    <textarea id="notes" name="notes" className="form-control" placeholder="Notes About your order & delivery"></textarea>
                </div>
            </div>
        </form>
    );
};

export default CheckoutForm;