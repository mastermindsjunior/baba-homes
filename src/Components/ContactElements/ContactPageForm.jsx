import React from 'react';

const ContactPageForm = () => {
    return (
        <div className="contact_us_1">
            <div className="section_header">
                <h6 className="section_sub_title">Contact Us</h6>
                <h1 className="section_title">Want to Ask anything?<br />
                    Send Us a Mail Anytime</h1>
            </div>
            <form className="contact_form" action="contact.php" method="post">
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
                        <div className="col-md-6 col-lg-6">
                            <div className="form-group">
                                <input type="text" name="phone" className="form-control" placeholder="Phone No" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="form-group">
                                <input type="text" name="subject" className="form-control" placeholder="Subject" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                            <div className="form-group">
                                <textarea name="message" className="form-control" placeholder="Message Here*" required=""></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                            <div className="form-group">
                                <input className="button" type="submit" value="Send Mail" name="submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactPageForm;