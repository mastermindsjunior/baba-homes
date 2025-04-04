import $ from 'jquery';
import React, { useEffect } from 'react';
import PageHeader from '../Components/common/PageHeader';
import Banner from '../Containers/Banner';

const FAQ = () => {
    useEffect(() => {
        // accordion
        $(".accordion").on("click", ".accordion_tab", function () {
            $(this).next().slideDown();
            $(".accordion_info").not($(this).next()).slideUp();
        });

        $(".accordion").on("click", ".item", function () {
            $(this).addClass("active").siblings().removeClass("active");
        });

    }, []);


    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='FAQ' heading='Frequently Asked Question' />

            <div className="main_wrapper">
                <div className="faq">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="images-faq">
                                    <img src="images/man.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="section_header">
                                    <h6 className="section_sub_title">Frequently Asked Question</h6>
                                    <h1 className="section_title">Do You Want to Know Anything From Us?</h1>
                                </div>
                                <div className="accordion">
                                    <div className="item active">
                                        <div className="accordion_tab">
                                            <h2 className="accordion_title">Floor Plan Descriptions</h2>
                                            <span className="accordion_tab_icon">
                                                <i className="open_icon ion-ios-arrow-down"></i>
                                                <i className="close_icon ion-ios-arrow-up"></i>
                                            </span>
                                        </div>
                                        <div className="accordion_info">
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit aut fugit, sed magni dolore squi ratione voluptatem sequi nesciunt. Neque porro quisquam qui dolorem ipsum quia dolor sit amet, consecteturadipisci velit options can also be used in conjunction with controlling the access.
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="accordion_tab">
                                            <h2 className="accordion_title">Construction Technology Used</h2>
                                            <span className="accordion_tab_icon">
                                                <i className="open_icon ion-ios-arrow-down"></i>
                                                <i className="close_icon ion-ios-arrow-up"></i>
                                            </span>
                                        </div>
                                        <div className="accordion_info">
                                            Aenean massa cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Donec quam felis ultricies pellentesque eu, pretium quis sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel aliquet nec vulputate eget. In enim justo rhoncus ut imperdiet venenatis vitae justo.
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="accordion_tab">
                                            <h2 className="accordion_title">Thoughts Behind the projects</h2>
                                            <span className="accordion_tab_icon">
                                                <i className="open_icon ion-ios-arrow-down"></i>
                                                <i className="close_icon ion-ios-arrow-up"></i>
                                            </span>
                                        </div>
                                        <div className="accordion_info">
                                            Aenean massa cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Donec quam felis ultricies pellentesque eu, pretium quis sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel aliquet nec vulputate eget. In enim justo rhoncus ut imperdiet venenatis vitae justo.
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="accordion_tab">
                                            <h2 className="accordion_title">Construction Technology Used</h2>
                                            <span className="accordion_tab_icon">
                                                <i className="open_icon ion-ios-arrow-down"></i>
                                                <i className="close_icon ion-ios-arrow-up"></i>
                                            </span>
                                        </div>
                                        <div className="accordion_info">
                                            Aenean massa cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Donec quam felis ultricies pellentesque eu, pretium quis sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel aliquet nec vulputate eget. In enim justo rhoncus ut imperdiet venenatis vitae justo.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Banner
                    title='Is Your House Secured Enough? Call Us to install Security Devices'
                    heading='Call Us Anytime'
                    phone='(+123)987.654.32'
                    bannerType='banner banner_bg_color'
                />

            </div>
        </>
    );
};

export default FAQ;