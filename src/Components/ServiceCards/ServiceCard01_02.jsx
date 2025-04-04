import React from 'react';

const ServiceCard01_02 = ({ data }) => {
    const { img, bg, title, description } = data;

    return (
        <div class="col-lg-4 col-md-6">
            <div class="iconbox">
                <div class="iconbox_wrapper">
                    <div class="iconbox_image">
                        <img src={bg} alt="img" />
                        <div class="iconbox_icon">
                            <a href="/services"><img src={img} alt="icon" /></a>
                        </div>
                    </div>
                    <div class="iconbox_content">
                        <h3><a href="/service-details">{title}
                        </a></h3>
                        <p>{description}</p>
                        <div class="read_more">
                            <a href="/service-details"><span>Get Service</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard01_02;