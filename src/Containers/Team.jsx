import React from 'react';
import { Controller, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamCard from '../Components/TeamElements/TeamCard';

const Team = (props) => {
    const TeamData = [
        {
            id: '1',
            img: 'images/team/6.png',
            tag: 'CEO',
            name: 'Oscar Holland'
        },
        {
            id: '2',
            img: 'images/team/7.png',
            tag: 'Constructor',
            name: 'Christpher Neel'
        },
        {
            id: '3',
            img: 'images/team/8.png',
            tag: 'Constructor',
            name: 'Kiara Nordstorm'
        },
        {
            id: '4',
            img: 'images/team/team-5.jpg',
            tag: 'CEO',
            name: 'Loyed CLive'
        },
    ];
    return (
        <div className={`team ${props.pb}`}>
            <div className="container">
                <div className="section_header text-center">
                    <div className="shadow_icon"><img src="images/shadow_icon5.png" alt="" /></div>
                    <h6 className="section_sub_title">OUR TEAM MEMBERS</h6>
                    <h1 className="section_title">Meet Our Amazing Team</h1>
                    <p className="section_desc">Builderrine is the best constructioncompany. It has best team who are provideing best service possible.</p>
                </div>
                <div className="row">
                    <div className="col">
                        <Swiper
                            className="owl_team owl-carousel owl-theme"
                            modules={[Pagination, Navigation, Controller]}
                            // slidesPerView={3}
                            breakpoints={{
                                640: {
                                    width: 576,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                            }}
                            spaceBetween={50}
                            loop={true}
                            // centeredSlides={true}
                            controller={{ inverse: true }}
                            // pagination={{
                            //     el: '.swiper-pagination',
                            //     clickable: true,
                            // }}
                            navigation={{
                                prevEl: '.owl-prev .disabled',
                                nextEl: '.owl-next',
                            }}
                        >
                            {
                                TeamData.map(data => <SwiperSlide><TeamCard
                                    key={data.id}
                                    data={data}
                                /></SwiperSlide>)
                            }

                        </Swiper>

                        {/* <!-- Add Buttons --> */}
                        {/* <div className="swiper-navigation">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div> */}

                        {/* <!-- Add Buttons --> */}
                        {/* <div className="owl-nav">
                            <button type="button" role="presentation" className="owl-prev disabled"><i className="fa fa-long-arrow-left"></i></button>
                            <button type="button" role="presentation" className="owl-next"><i className="fa fa-long-arrow-right"></i></button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;