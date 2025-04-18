import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_above">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 left-footer">
                            <div className="footer_widget footer_widget_padding">
                            <h4 className="widget_title">
                                    CDC Homes
                                </h4>
                            <div className="logo">
                            {/* <a href="index"><img src="images/logo_foot.png" alt="Logo" /></a> */}
                        </div>
                                <p  className=' text-left'>Who are looking for Extraordinary projects need vision & precision to be exceptional. They need CDC Homes Services.</p>

                                <div className="side_footer_social">
                                    <ul className="bottom_social">
                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 center-footer">
                            <div className="footer_widget footer_links">
                                <h4 className="widget_title">
                                    Useful Links
                                </h4>
                                <div className="footer_nav">
                                    <ul className="footer_menu">
                                        <li className="menu-item"><Link to="/">Home</Link></li>
                                        <li className="menu-item"><Link to="/residential">Residential</Link></li>
                                        <li className="menu-item"><Link to="/commercial">Commercial</Link></li>
                                        <li className="menu-item"><Link to="/about">About</Link></li>
                                        <li className="menu-item"><Link to="/blogs">Blogs</Link></li>
                                        {/* <li className="menu-item"><a href="/service-details">Be an Instructor</a></li> */}
                                        <li className="menu-item"><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 right-footer">
                    {/* <div className="subscribe">
                                    <form className="form-inline">
                                        <div className="input-group mb-2 mr-sm-2">
                                            <input type="email" className="form-control" placeholder="Email Address" />
                                        </div>
                                        <button type="submit" className="btn">Subscribe</button>
                                    </form>
                                </div> */}
                                <div className="footer_widget">
                                <h4 className="widget_title">
                                    Address
                                </h4>
                                <ul>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i><span>(780) 710-3640</span></li>
                                    <li><i className="fa fa-map-marker" aria-hidden="true"></i><span># 152, 134 Pembina Road, <br /> Sherwood park, AB</span></li>
                                    <li><i className="fa fa-envelope" aria-hidden="true"></i><span>cdchomes@hotmail.com</span></li>
                                    {/* <li><i className="fa fa-clock-o" aria-hidden="true"></i><span>Monday - Friday (9.00am - 9.00pm)</span></li> */}
                                </ul>
 
                            </div>
</div>


 
  
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="footer_bottom_inner">
                        <div className="copyright">
                            <p>&copy;2024 <a href="/">CDC Homes</a> All rights reserved.</p>
                            <p>Designed & Developed by <a href="https://www.mastermindsjunior.com">MasterMinds Junior</a>.</p>
                        </div>
                        <div className="footer_nav_bottom">
                            {/* <ul>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul> */}
                        </div>
                        <div className="totop">
                            <a href="#"><i className="ion-ios-arrow-up"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;