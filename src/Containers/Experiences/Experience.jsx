import React from 'react';
import AboutBelowContent from '../../Components/ExperienceBlocks/AboutBelowContent';
import { Link } from 'react-router-dom';

const Experience = () => {
    const headerData = {
        img: 'images/about/shadow_icon1.png',
        heading: 'Bringing your dream home to life with quality and expertise',
        subheading: 'ABOUT CDC Homes',
    };

    const ExpericenData = [
        {
            id: '1',
            title: 'Most Reliable',
            description: 'Trusted by numerous satisfied clients'
        },
        {
            id: '2',
            title: 'Cost Effective',
            description: 'Affordable solutions without compromising quality'
        },    
    ];

    return (
        <div className="experience section">
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <div className="experience_content">
                            <div className="section_header">
                                {/* <div className="shadow_icon"><img src={headerData.img} alt="" /></div> */}
                                {/* <h6 className="section_sub_title text-center">{headerData.subheading}</h6> */}
                                <h1 className="section_title">{headerData.heading}</h1>
                                <p className="section_desc text-left">"At CDC Homes, we specialize in custom home construction in Edmonton, crafting beautiful, high-quality homes that match your vision. With years of experience as trusted home builders in Edmonton, our commitment to excellence and attention to detail set us apart."</p>
                                <div className="about_below">
                                    {
                                        ExpericenData.map(data =>
                                            <AboutBelowContent
                                                key={data.id}
                                                data={data}
                                            />
                                        )
                                    }

                                </div>
                            </div>
                            <Link className="button" to="/about">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/images/p_details.png" alt="home" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;