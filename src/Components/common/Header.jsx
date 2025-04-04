import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import MobileNav from './MobileNav/MobileNav';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState("home");
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    // Update the active state based on the current route
    useEffect(() => {
        const path = location.pathname.split("/")[1]; // Get the active path segment
        setActive(path || "home"); // Default to 'home' if the path is empty
    }, [location]);

    useEffect(() => {
        const middleBar = document.querySelector('.middle_bar');
        const LeftBar = document.querySelector('.LeftBar');
        const header = document.querySelector('.header');
        const handleScroll = () => {
           setScrolled( window.scrollY < 50 ? false : true)
        };

        // Initial state
        // gsap.set(middleBar, { opacity: 0 });
        gsap.set(LeftBar, { left: 0 });
        // gsap.set(header, { height: '50px' });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const middleBar = document.querySelector('.middle_bar');
        const LeftBar = document.querySelector('.LeftBar');
        const header = document.querySelector('.header');
        gsap.to(header, {height:'160px', ease:'power1.out', duration:0.1 });
        gsap.to(LeftBar, {left:'-30%', ease:'power1.out', duration:0.4 });
        gsap.to(middleBar, { opacity: 1, duration: 0.6,delay:0.6, ease: "power1.out" }); // Show the middle_bar
        // if (scrolled) {
        // } else {
        //     gsap.to(middleBar, { opacity: 0, duration: 0.4, ease: "power1.in" }); // Hide the middle_bar
        //     gsap.to(LeftBar, {left:'0%', ease:'power1.out', duration:0.8, onComplete:(()=> gsap.set(middleBar, {opacity:0})) });
        //     gsap.to(header, {height:'50px', ease: "power2.out", duration:0.1, delay:0.2 });
        // }
    },[scrolled])

    const handleToggle = (text) => {
        setActive(text);
    };

    return (
        <>
            <header className="header ">
                {/* <div className="top_bar" id="top-bar">
                    <div className="container">
                        <div className="top_bar_inner">
                            <div className="header_social">
                                <h6>Follow Us</h6>
                                <ul className="top_social">
                                    <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                    <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                </ul>
                            </div>
                            <div className="header_info">
                                <div className="schedule">
                                    <a href="tel:7807103640"><span><i className="fa fa-phone"></i></span>(780) 710-3640</a>
                                </div>
                                 <p>|</p>
                                <div className="schedule">
                                    <a href="tel:1-780-965-5819"><span><i className="fa fa-phone"></i></span> 1-(780)-965-5819</a>
                                </div> 
                                <p>|</p>
                                <div className="schedule">
                                    <a href="mailto:cdchomes@hotmail.com"><span><i className="fa fa-envelope"></i></span>cdchomes@hotmail.com</a>
                                </div>
                                <div className="free_contact">
                                    <Link onClick={() => handleToggle('contact')} to="/contact" className="btn">Query?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="middle_bar">
                    <div style={{margin:"2rem", marginTop:"1rem"}}>
                        <div className="middle_bar_inner">
                    <div className="header_left_part">
                        <div className="mainnav">
                            <ul className="main_menu">
                            <li onClick={() => handleToggle('home')} className={`menu-item ${active === 'home' && 'active'}`}><Link to="/">Home</Link></li>
                                        <li onClick={() => handleToggle('residentials')} className={`menu-item  ${active === 'residentials' && 'active'}`}><Link to="/residentials">Residential</Link></li>
                                        <li onClick={() => handleToggle('commercial')} className={`menu-item  ${active === 'commercial' && 'active'}`}><Link to="/commercials">Commercial</Link></li>
                            </ul>
                        </div>
                    </div>
                            <div className="logo" style={{paddingLeft:"0.5rem"}}>
                                <Link to="/" className="light_mode_logo"><img src="/logo.jpg" alt="logo" /></Link>
                                <Link to="/" className="dark_mode_logo"><img src="images/logo_foot.png" alt="logo" /></Link>
                            </div>
                            <div className="header_right_part">
                                <div className="mainnav">
                                    <ul className="main_menu">
                                        <li onClick={() => handleToggle('about')} className={`menu-item ${active === 'about' && 'active'}`}><Link to="/about">About</Link></li>
                                        <li onClick={() => handleToggle('project')} className={`menu-item  ${active === 'project' && 'active'}`}><Link to="/project">Projects</Link></li>
                                        <li onClick={() => handleToggle('contact')} className={`menu-item ${active === 'contact' && 'active'}`}><Link to="/contact">Contact</Link></li>
                                        
                                    </ul>
                                </div>
                                <button className="ma5menu__toggle position-relative d-lg-none" type="button">
                                    <i className="ion-android-menu"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <MobileNav />

            <div className="LeftBar">
                    <ul className="mainMenu">
                        {/* <li onClick={() => handleToggle('home')} className={`menu-item ${active === 'home' && 'active'}`}><Link to="/">Home</Link></li>
                        <li onClick={() => handleToggle('residentials')} className={`menu-item  ${active === 'residentials' && 'active'}`}><Link to="/residentials">Residential</Link></li>
                        <li onClick={() => handleToggle('commercial')} className={`menu-item  ${active === 'commercial' && 'active'}`}><Link to="/commercials">Commercial</Link></li>
                        <li onClick={() => handleToggle('about')} className={`menu-item ${active === 'about' && 'active'}`}><Link to="/about">About</Link></li>
                        <li onClick={() => handleToggle('project')} className={`menu-item  ${active === 'project' && 'active'}`}><Link to="/project">Projects</Link></li>
                        <li onClick={() => handleToggle('contact')} className={`menu-item ${active === 'contact' && 'active'}`}><Link to="/contact">Contact</Link></li> */}
                        {/* <li className={`menu-item community`}>Churchill Meadows</li>
                        <li className={`menu-item community`}>Irvine creek</li>
                        <li className={`menu-item community`}>Alices</li>
                        <li className={`menu-item community`}>Schones</li> */}
                        
                    </ul>
            </div>
        </>
    );
};

export default Header;
