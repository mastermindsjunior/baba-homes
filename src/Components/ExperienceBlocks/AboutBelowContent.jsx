import React from 'react';

const AboutBelowContent = ({ data }) => {
    const { title, description } = data;

    return (
        <div className="about_below_content">
            <i className="ion ion-ios-checkmark-outline" aria-hidden="true"></i>
            <div className="about_below_content_text">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AboutBelowContent;