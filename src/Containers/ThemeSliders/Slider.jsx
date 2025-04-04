import React from 'react';
import { Link } from 'react-router-dom';
import TextEditor from '../../editor';

const Slider = () => {
    return (
        <div className="theme_slider_1">
            <div className="slider">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-5 d-flex align-items-end"></div>
                        <div className="col-lg-6">
                            <div className="slide_content">
                                {/* <h5 className="sub_heading">CALL US ANYTIME<span>+1-(780)-517-7777</span> <br /><span>+1-(780)-965-5819</span></h5> */}
                                <h2 className="heading">Where Dreams Become Reality</h2>
                                {/* <TextEditor id={'mainHeading'} filePath={'src/Containers/ThemeSliders/Slider.jsx'}>
                                </TextEditor> */}
                                <p className="desc">Creating timeless homes with touch of Royality.</p>
                                <div className="slider_button">
                                    <Link to="/about" className="button">Learn More</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <video src="video/landing.mp4" muted loop className='LandingVideo'></video> */}
                <img src="/images/home.jpeg" alt="homes" className='landingImg' />
            </div>
        </div>
    );
};

export default Slider;