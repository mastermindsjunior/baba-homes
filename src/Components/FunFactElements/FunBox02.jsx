import React from 'react';
import CountUp from 'react-countup';

const FunBox02 = ({ data }) => {
    const { img, name, number } = data;
    return (
        <div className="funbox2">
            <div className="fun_img">
                <img src={img} alt="icon" />
            </div>
            <div className="fun_content">
                <h1><CountUp start={0} end={number} delay={3} suffix='+'><span className="fun-number">{number}</span></CountUp></h1>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default FunBox02;