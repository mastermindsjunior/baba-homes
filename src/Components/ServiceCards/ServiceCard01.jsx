import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard01 = ({ data }) => {
    const { img, img02, title, number, bg } = data;

    return (
        <div className="col-lg-4 col-md-4">
            <div className={`service_inner service_inner2 ${bg}`}>
                <div className="service_content d-flex align-self-center">
                    <div className="icon_img">
                        <img src={img} alt="" />
                    </div>
                    <div className="services_content_flex_cenrer">
                        <h6>SERVICE {number}</h6>
                        <h4><a href="/services">{title}</a></h4>
                        <Link to="/contact">Get Service <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div className="main_img">
                    <img src={img02} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard01;