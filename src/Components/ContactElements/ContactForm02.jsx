import React from 'react';

const ContactForm02 = () => {
    return (
        <form className="contact_form">
            <div className="form-container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Your Name*" required="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Email Address*" required="" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Choose Service</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                            <textarea name="message" className="form-control" placeholder="Text..." required=""></textarea>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                            <input className="button" type="submit" value="Learn More" name="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm02;