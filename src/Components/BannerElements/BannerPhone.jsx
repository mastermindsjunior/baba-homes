import React from 'react';

const BannerPhone = (props) => {
    return (
        <div className="banner_phone">
            <h4>{props.heading}</h4>
            {props.phones.map((phone) => (
            <>
            <a href={`tel:${phone}`}><span>{phone}</span></a>
            <br />
            </>
            ))}
        </div>
    );
};

export default BannerPhone;