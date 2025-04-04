import React from 'react';

const TopFeatures = () => {
    return (
        <div className="top_feature">
            <div className="container">
                <div className="full_image_holder">
                    <img src="images/about/about_img.png" alt="" />
                </div>
                {/* <div className="logo_image_holder">
                    <img src="images/about/badge1.png" alt="" />
                    <img src="images/about/badge2.png" alt="" />
                    <img src="images/about/badge3.png" alt="" />
                </div> */}
                <div className="content_inner">
                    <h1>We Receives Recognition for Project Excellence, Safety, and Diversity</h1>
                </div>
            </div>
        </div>
    );
};

export default TopFeatures;