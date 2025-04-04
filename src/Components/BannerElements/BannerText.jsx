import React from 'react';

const BannerText = (props) => {
    return (
        <div className="banner_text">
            {/* <img src="images/phone3.png" alt="" /> */}
            <h1>{props.title}</h1>
        </div>
    );
};

export default BannerText;