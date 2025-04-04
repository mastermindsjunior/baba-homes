import React from 'react';
import ContactForm02 from '../../Components/ContactElements/ContactForm02';

const ContactHome02 = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div className="contact_us_1">
                            <div className="section_header">
                                <h1 className="section_title">Contact Us To get all the Services & Consultation</h1>
                            </div>
                            <ContactForm02 />
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="contact_side_image">
                            <img src="images/contac_img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHome02;