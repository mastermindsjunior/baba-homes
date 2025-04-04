import React from 'react';
import CountUp from 'react-countup';

const FunBox01 = ({ data }) => {
    const { img, name, number } = data;
    return (
        <div className="col-lg-6 col-sm-6">
            <div className="funbox1">
                <div className="fun_img">
                    <img src={img} alt="icon" />
                </div>
                <div className="fun_content">
                    <h1><CountUp start={0} end={number} delay={2} suffix='+'><span className="fun-number">{number}</span></CountUp></h1>
                    <p>{name}</p>
                </div>
            </div>

        </div>
    );
};

export default FunBox01;