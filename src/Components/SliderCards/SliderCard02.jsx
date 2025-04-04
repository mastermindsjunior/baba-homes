import React from 'react';

const SliderCard02 = ({ data }) => {
    const { bg, heading, description, obj1, obj2, obj3, obj4, img1, img2, img3, img4, } = data;
    return (
        <div className="slider" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="slide_content">
                            <h5 className="sub_heading">Custom Home Builders in Edmonton—CDC Homes</h5>
                            <h2 className="heading">{heading}</h2>
                            <p className="desc">{description}</p>
                            <div className="slider_button">
                                <a href="/about" className="button">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={`floating_object ${obj1}`}><img src={img1} alt="" /></div>
                <div className={`floating_object ${obj2}`}><img src={img2} alt="" /></div>
                <div className={`floating_object ${obj3}`}><img src={img3} alt="" /></div>
                <div className={`floating_object ${obj4}`}><img src={img4} alt="" /></div> */}
            </div>
        </div>
    );
};

export default SliderCard02;