import React from 'react';
import { Controller, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCardHome02 from '../../Components/BlogCards/BlogCardHome02';

const BlogHome02 = () => {
    const BlogDataHome02 = [
        {
            id: '1',
            img: 'images/blog/b3.png',
            title: 'Use of modern Technology in Road construction',
        },
        {
            id: '2',
            img: 'images/blog/b4.png',
            title: 'History Creating Highrise Designs Ever',
        },
        {
            id: '3',
            img: 'images/blog/b5.png',
            title: 'Contribution of women in as workers',
        },
        {
            id: '4',
            img: 'images/blog/b3.png',
            title: 'Use of modern Technology in Road construction',
        },

    ];

    return (
        <div className="blog section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section_header_width_no_margin text-center">
                            <h6 className="section_sub_title">LATEST BLOGS</h6>
                            <h1 className="section_title">Revealing Construction Industry Secrets through blogs</h1>
                        </div>
                    </div>
                </div>
                <div className="blog_grid">
                    <div className="row">
                        <div className="col">
                            <Swiper
                                className="owl_blog owl-carousel owl-theme"
                                modules={[Pagination, Navigation, Controller]}
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
                            // navigation={{
                            //     prevEl: '.swiper-button-prev',
                            //     nextEl: '.swiper-button-next',
                            // }}
                            >
                                {
                                    BlogDataHome02.map(data => <SwiperSlide><BlogCardHome02
                                        key={data.id}
                                        data={data}
                                    /></SwiperSlide>)
                                }

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHome02;