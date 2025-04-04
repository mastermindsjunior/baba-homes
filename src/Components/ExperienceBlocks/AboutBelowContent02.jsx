import React from 'react';

const AboutBelowContent02 = ({ data }) => {
    const { title, description, img } = data;

    return (
        <div className="about_below_content">
            {/* <img src={img} alt="" /> */}
            <div className="about_below_content_text">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AboutBelowContent02;