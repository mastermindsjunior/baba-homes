import React from 'react';

const TestimonialCard01 = ({ data }) => {
    const { img, name, country, content } = data;
    return (
        <div className="item">
            <div className="testibox1">
                <div className="testibox_inner">
                    <div className="testi-content">
                        <ul>
                            <li className="text">Rating:</li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                        </ul>
                        <p>{content}</p>
                    </div>
                    <div className="testi-top">
                        <div className="testi-img">
                            <img src={img} alt="" />
                        </div>
                        <div className="testi-info">
                            <h4>{name}</h4>
                            <h6>{country}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard01;