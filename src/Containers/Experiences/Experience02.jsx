import React from 'react';

const Experience02 = () => {
    const headerData = {
        heading: 'Building Dream into Reality',
        subheading: 'ABOUT BUILDERRINE CONSTRUCTION',
        detail: 'Builderrine is the safe and cost effective construction company. We offer best construction Services. Trust Us with your project.',
        img: 'images/about/call_img.png',
    };
    return (
        <div className="experience about_bg_image another_bg_image">
            <div className="upper_sm_img">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="group_image_holder">
                                <img src="images/about/2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="experience_content experience_content_margin ">
                                <div className="section_header">
                                    <h6 className="section_sub_title">{headerData.subheading}</h6>
                                    <h1 className="section_title">{headerData.heading}</h1>
                                    <p className="short_detail">{headerData.detail}</p>
                                    <p className="section_desc">Builderrine is the safe, reliable and cost effective construction company. We offer best construction Services. We have more than 35 years of experience in the field of building & construction. If you want to build any highrise or housing projects, you are in the best palce right now</p>
                                    <div className="section_call">
                                        <div className="call_image">
                                            <img src={headerData.img} alt="" />
                                        </div>
                                        <div className="call_info">
                                            <p>Call Us anytime tou want.We are <span>available 24/7</span></p>
                                            <h4>321-654-6780 <span>or</span> 321-654-6780</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="floating_object floating_object_7"><img src="images/about/s_b.png" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Experience02;