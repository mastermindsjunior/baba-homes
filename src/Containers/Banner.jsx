import React from 'react';
import BannerPhone from '../Components/BannerElements/BannerPhone';
import BannerText from '../Components/BannerElements/BannerText';

const Banner = (props) => {

    const phones = props.phone.split('|');


    return (
        <div className={props.bannerType}>
            <div className="">
                <div className="banner_content">
                    <div className="row">
                        <div className="col-lg-12">
                            <BannerText title={props.title} />
                        </div>
                        <div className="col-lg-12">
                            <BannerPhone heading={props.heading} phones={phones} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;