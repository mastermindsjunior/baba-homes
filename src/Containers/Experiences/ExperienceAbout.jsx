import React from 'react';
import AboutBelowContent02 from '../../Components/ExperienceBlocks/AboutBelowContent02';
import { Link } from 'react-router-dom';

const ExperienceAbout = () => {
    const headerData = {
        heading: 'CDC Homes—Experienced Custom Home Builders Dedicated to Quality',
        subheading: 'Building Excellence in Edmonton',
    };

    const ExpericenData = [
        {
            id: '1',
            title: 'Custom Home Construction Experts',
            description: 'We create homes that suit your lifestyle, budget, and vision..',
            img: 'images/about/t1.png'

        },
        {
            id: '2',
            title: 'Innovative & Sustainable Designs',
            description: 'Using the latest trends and high-quality materials, we build durable and stylish homes.',
            img: 'images/about/t2.png'
        },
        {
            id: '3',
            title: 'Client-Centric Approach',
            description: 'We believe in transparent communication, timely project completion, and exceeding expectations.',
            img: 'images/about/t2.png'
        },
    ];
    return (
        <div className="experience">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="group_image_holder type_1">
                            <div className="expe_box">
                                <div className="expe_box_inner">
                                    <img src="/logo.jpg" alt="logo" />
                                </div>
                            </div>
                            <img src="images/about/houses.jpg" alt="" />
                            <div className="object">
                                <img src="images/about/3.png" alt="About" />
                                <img src="images/about/3.png" alt="About" />
                                <img src="images/about/3.png" alt="About" />
                                <img src="images/about/s1.png" alt="About" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="experience_content about">
                            <div className="section_header">
                                <h6 className="section_sub_title">{headerData.subheading}</h6>
                                <h1 className="section_title">{headerData.heading}</h1>
                                <p className="section_desc">At CDC Homes, we are passionate about building exceptional homes that reflect your style and needs. As leading home builders in Edmonton, we specialize in custom homes, luxury home construction, and high-quality renovations</p>
                                <div className="about_below">
                                <h5 style={{color:"white", fontSize:"1.5rem", marginBottom:"1rem"}}>What Sets CDC Homes Apart?</h5>
                                    {
                                        ExpericenData.map(data =>
                                            <AboutBelowContent02
                                                key={data.id}
                                                data={data}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                            <Link className="button" to="/residentials">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceAbout;