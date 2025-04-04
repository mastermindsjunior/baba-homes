import React from 'react';

const CommunicationCard = ({ data }) => {
    const { iconClass, infoBody01, infoBody02, infoBody03 } = data;
    return (
        <div className="communication">
            <div className="communication_icon">
                <i className={iconClass}></i>
            </div>
            <div className="info_body">
                <h5>{infoBody01}</h5>
                <h6>{infoBody02}</h6>
                <h6>{infoBody03}</h6>
            </div>
        </div>
    );
};

export default CommunicationCard;