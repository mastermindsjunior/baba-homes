import React from 'react';

const TestimonialCard02 = ({ data }) => {
    const { name, upperImg, midImg } = data;
    return (
        <div className="item">
            <div className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="testimonial_image">
                                <img className="first_img" src="images/others/Ellipse_55.png" alt="" />
                                <div className="image_color">
                                    <img className="middle_img" src={midImg} alt="" />
                                </div>
                                <img className="last_img" src="images/others/Ellipse_56.png" alt="" />
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-5">
                            <div className="testibox2">
                                <div className="testibox_inner">
                                    <div className="testi-content testibox_others">
                                        <div className="upper_img">
                                            <img src={upperImg} alt="" />
                                        </div>
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                        </ul>
                                        <p>“Builderrine Construction provides us amazing serives. The have designed and build our Miami grand Hotel project. They have exceeded our expectation and did such an amazing job. We are very happy with their work”</p>
                                    </div>
                                    <div className="testi-top">
                                        <div className="testi-info_others">
                                            <h4>{name}</h4>
                                            <h6>CEO, Oberoi Hospitality Industry</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard02;