import React from 'react';

const PreHeader = () => {
    return (
        <div className="top_bar" id='top-bar'>
            <div className="container">
                <div className="top_bar_inner">
                    <div className="header_social">
                        <h6>Follow Us</h6>
                        <ul className="top_social">
                            <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                            <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                            <li className="dribbble"><a href="#"><i className="ion-social-dribbble-outline"></i></a></li>
                            <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                            <li className="linkedin"><a href="#"><i className="ion-social-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="header_info">
                        <div className="schedule">
                            <div className="hide_icon d-md-none" data-text="Monday - Friday (9.00am - 9.00pm)"> <span><i className="fa fa-clock-o"></i></span></div>
                            <div className="d-none d-md-block"><span><i className="fa fa-clock-o"></i></span> Monday - Friday <strong>(9.00am - 9.00pm)</strong></div>
                        </div>
                        <div className="schedule">
                            <div className="hide_icon d-md-none" data-text="builderrine@gmail.com"> <span><i className="fa fa-envelope"></i></span></div>
                            <div className="d-none d-md-block"><span><i className="fa fa-envelope"></i></span> builderrine@gmail.com</div>
                        </div>
                        <div className="free_contact">
                            <a href="contact" className="btn">Request Free Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreHeader;