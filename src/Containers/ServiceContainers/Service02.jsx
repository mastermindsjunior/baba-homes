import React from 'react';
import { Autoplay, Controller, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceCard02 from '../../Components/ServiceCards/ServiceCard02';
// import './Service.css';


const Service02 = () => {
    const ServiceData02 = [
        {
            id: '1',
            img: 'images/services/s4.png',
            img02: 'images/services/Service_Hover_images/1.jpg',
            tag: 'COMMERTIAL DESIGN',
            title: 'Builderrine is the safe, reliable & cost effective construction company.'
        },
        {
            id: '2',
            img: 'images/services/s5.png',
            img02: 'images/services/Service_Hover_images/2.jpg',
            tag: 'REAL ESTATE',
            title: 'Builderrine Construction Company Receives Industry Recognition.'
        },
        {
            id: '3',
            img: 'images/services/s7.png',
            img02: 'images/services/Service_Hover_images/3.jpg',
            tag: 'DEMOLITION',
            title: 'Extraordinary projects demand a strategic and intelligent approach, finely.'
        },
        {
            id: '4',
            img: 'images/services/s6.png',
            img02: 'images/services/Service_Hover_images/4.jpg',
            tag: 'HIGHRISE BUILDING',
            title: 'Builderrine is the safe, reliable & cost effective construction company.'
        },
        {
            id: '5',
            img: 'images/services/s4.png',
            img02: 'images/services/Service_Hover_images/5.jpg',
            tag: 'HIGHRISE BUILDING',
            title: 'Builderrine is the safe, reliable & cost effective construction company.'
        },
    ];

    return (
        <div className="section2 service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section_header">
                            <h6 className="section_sub_title">OUR SERVICES</h6>
                            <h1 className="section_title">Perfect Services to Build Extraordinary Projects</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container_new">
                <div className="row">
                    <div className="col">
                        <Swiper
                            className="owl_testimonial1 owl-carousel owl-theme"
                            modules={[Navigation, Controller, Pagination, Autoplay]}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: true,
                                speed: 3000
                            }}
                            breakpoints={{
                                640: {
                                    width: 640,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                                992: {
                                    width: 992,
                                    slidesPerView: 2,
                                },
                            }}
                            loop={true}
                            controller={{ inverse: true }}
                            spaceBetween={5}

                            navigation={{
                                prevEl: '.owl-prev .disabled',
                                nextEl: '.owl-next',
                            }}

                            pagination={{
                                el: '.testimonial-pagination',
                                clickable: true,
                                dynamicBullets: true,
                            }}
                        >
                            {
                                ServiceData02.map(data =>
                                    <SwiperSlide>
                                        <ServiceCard02
                                            key={data.id}
                                            data={data}
                                        />
                                    </SwiperSlide>
                                )
                            }

                        </Swiper>

                        {/* <!-- Add Pagination --> */}
                        <div className="testimonial-pagination"></div>

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

export default Service02;