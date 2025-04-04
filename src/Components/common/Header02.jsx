import React, { useState } from 'react';
import MobileNav from './MobileNav/MobileNav';


const Header02 = () => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>
            <header className="header header_color">
                <div className="middle_bar">
                    <div className="container">
                        <div className="middle_bar_inner">
                            <div className="logo">
                                <a href="/" className="light_mode_logo"><img src="images/logo.jpg" alt="logo" /></a>
                                <a href="/" className="dark_mode_logo"><img src="images/logo_foot.svg" alt="logo" /></a>
                            </div>

                            <div className="header_right_part">
                                <div className="mainnav">
                                    <ul className="main_menu">
                                        <li className="menu-item menu-item-has-children active"><a href="/">Home</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/">Home One</a></li>
                                                <li className="menu-item active"><a href="/home-2">Home Two</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="#">Services</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/services">Service One</a></li>
                                                <li className="menu-item"><a href="/services-2">Service Two</a></li>
                                                <li className="menu-item"><a href="/service-details">Service Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="#">Projects</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/project">Projects One</a></li>
                                                <li className="menu-item"><a href="/project-2">Peojects Two</a></li>
                                                <li className="menu-item"><a href="/project-details">Peojects Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/about">About</a></li>
                                                <li className="menu-item"><a href="/team">Team</a></li>
                                                <li className="menu-item"><a href="/faq">FAQ</a></li>
                                                <li className="menu-item menu-item-has-children"><a href="#">Shop</a>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item"><a href="/shop-1">Shop One</a></li>
                                                        <li className="menu-item"><a href="/shop-2">Shop Two</a></li>
                                                        <li className="menu-item"><a href="/shop-3">Shop Three</a></li>
                                                        {/* <li className="menu-item"><a href="/shop-4">Shop Four</a></li> */}
                                                        <li className="menu-item"><a href="/product">Product Details</a></li>
                                                        <li className="menu-item"><a href="/cart">Cart</a></li>
                                                        <li className="menu-item"><a href="/checkout">Checkout</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children"><a href="#">Blog</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="/blog-1">Blog One</a></li>
                                                <li className="menu-item"><a href="/blog-2">Blog Two</a></li>
                                                <li className="menu-item"><a href="/blog-details">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item"><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="phone phn_color">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <div><span>Call Us Anytime</span><br /><span className="phn_number">(+123)987.654.32</span></div>
                                </div>
                                <div className="header_search" onClick={handleToggle}>
                                    <button type="submit" className="form-control-submit"><i className="ion-ios-search"></i></button>
                                </div>
                                <div id='open_search' className={isActive ? null : "active"}>
                                    <form className="search_form" action="search.php">
                                        <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                        <button type="submit" className="form-control-submit"><i className="ion-ios-search"></i></button>
                                    </form>
                                </div>
                                <button className="ma5menu__toggle position-relative d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasHome" aria-controls="offcanvasHome"
                                >
                                    <i className="ion-android-menu"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileNav />
        </>
    );
};

export default Header02;