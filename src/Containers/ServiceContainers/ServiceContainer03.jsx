import React from 'react';
import Video from '../../Components/BannerElements/Video';
import Testimonial01 from '../Testimonials/Testimonial01';

const ServiceContainer03 = () => {
    return (
        <div className="main_wrapper">
            <div className="container">
                <div className="project_details section">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="project_details_inner">
                                <div className="post_img">
                                    <img src="images/services/details.png" alt="blog" />
                                </div>
                                <div className="post_content">
                                    <div className="post_header">
                                        <h3 className="post_title">Comertial Construction</h3>
                                    </div>
                                    <div className="fulltext">
                                        <p>
                                            Burglars prefer to work in the cover of dark. By setting up lighting around your garage can aid in
                                            keeping burglars at bay. Install a sensor light to turn on as you enter the driveway and approach
                                            the garage. Not only will it prove a burglar deterrent it will also assist you with seeing better to
                                            come home late.
                                        </p>

                                        <p>
                                            As the world continues to fight COVID-19 some property owners are searching for way they can
                                            improve the security of their buildings whilst decreasing the spread of germs and bacteria. The
                                            following 3 hygienic security solutions are suitable for use within high traffic areas across both
                                            residential and commercial buildings.
                                        </p>

                                        <h4 className="widget_title">
                                            Service Steps
                                            <span className="title_line"></span>
                                        </h4>
                                        <p className="margin_o_para">The following problems may arise withe house key duplication -</p>
                                        <ul className="point_order">
                                            <li>As the world continues to fight COVID-19 some property owners</li>
                                            <li>improve the security of their buildings whilst decreasing the spread</li>
                                            <li>following 3 hygienic security solutions are suitable for use within</li>
                                            <li>esidential and commercial buildings improve the security</li>
                                        </ul>

                                        <div className="post_gallery">
                                            <div className="row">
                                                <div className="col-lg-6 col-sm-6">
                                                    <div className="anim_box">
                                                        <img src="images/services/10.png" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6">
                                                    <div className="anim_box">
                                                        <img className="sm-margin-bottom" src="images/services/11.png" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p>
                                            Burglars prefer to work in the cover of dark. By setting up lighting around your garage can aid in
                                            keeping burglars at bay. Install a sensor light to turn on as you enter the driveway and approach
                                            the garage. Not only will it prove a burglar deterrent it will also assist you with seeing better to
                                            come home late.
                                        </p>

                                        <Video bg='images/services/video_bg.png' />

                                        <p>
                                            By automating your doors this removes the need for people touching handles or surfaces. Both of
                                            the above options can also be used in conjunction with controlling the access of your automatic
                                            doors. For example, a touch-less sensor can be installed to control the opening of the door.
                                        </p>

                                        <p>
                                            Automatic doors can be programmed to be activate during certain times and remain locked at a
                                            others. Door openers/closer can also be automated for use in some high traffic areas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="sidebar">
                                <div id="widgetnav" className="widget widget_menu">
                                    <div className="sidenav">
                                        <ul className="side_menu">
                                            <li className="menu-item active">
                                                <a href="/services">
                                                    <img src="images/services/cone_1.png" alt="" />
                                                    <img src="images/services/2-white.png" alt="" />
                                                    Architectural Design
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/services-2">
                                                    <img src="images/services/9-blue.png" alt="" />
                                                    <img src="images/services/cone_2.png" alt="" />
                                                    Comertial Construction
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/services">
                                                    <img src="images/services/cone_3.png" alt="" />
                                                    <img src="images/services/5-blue.png" alt="" />
                                                    Real Estate & Housing Construction
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/services-2">
                                                    <img src="images/services/cone_4.png" alt="" />
                                                    <img src="images/services/1-white.png" alt="" />
                                                    Renewable energy plant
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/services">
                                                    <img src="images/services/cone_5.png" alt="" />
                                                    <img src="images/services/11-white.png" alt="" />
                                                    Commertial Powerplant
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/services-2">
                                                    <img src="images/services/cone_6.png" alt="" />
                                                    <img src="images/services/10-white.png" alt="" />
                                                    Commercial Blueprint
                                                </a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="/services">
                                                    <img src="images/services/cone_7.png" alt="" />
                                                    <img src="images/services/7-white.png" alt="" />
                                                    Civil Engineering
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div id="custom_2" className="widget widget_side_contact">
                                    <div className="side_contact">
                                        <div className="side_contact_top">
                                            <div className="side_contact_inner">
                                                <p>Need Construction Service?</p>
                                                <h4>Make An Appointment</h4>
                                            </div>
                                        </div>
                                        <div className="side_phone_inner">
                                            <div>(+123)987.654.32</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonial01 pb='pd_btom_80 pd_top_80' />
        </div>
    );
};

export default ServiceContainer03;