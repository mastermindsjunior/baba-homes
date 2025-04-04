import React from 'react';
import { Controller, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard01 from '../../Components/TestimonialCards/TestimonialCard01';
// import './Testimonial.css';

const Testimonial01 = (props) => {
    const TestimonialData01 = [
        {
            id: '1',
            img: 'images/reviewer1.png',
            country: 'Windermere, Edmonton',
            name: 'John Peterson',
            content:`"CDC Homes transformed our vision into reality. They designed and built our dream home in Malibu, delivering top-notch quality and attention to detail. Their professionalism and expertise exceeded all our expectations. We couldn't be happier with the final results!"`
        },
        {
            id: '2',
            img: 'images/reviewer4.png',
            country: 'Glenora, Edmonton',
            name: 'Emily Thompson',
            content:`"Working with CDC Homes was an exceptional experience. They managed the renovation of our lake house with precision and care, turning it into a stunning retreat. Their team was reliable, skilled, and always went the extra mile to fulfill our wishes. Highly recommended!"`
        },
        {
            id: '3',
            img: 'images/reviewer3.png',
            country: 'Terwillegar Towne, Edmonton',
            name: 'David McKenzie',
            content:`"CDC Homes provided outstanding service from start to finish. They designed and constructed our modern beach house, creating a space that is both beautiful and functional. Their commitment to excellence truly shows in their work. We are thrilled with the outcome!"`
        },
    ]
    return (
        <div className={`testimonial ${props.pb} `}>
            <div className="container">
                <div className="section_header text-center">
                    <div className="shadow_icon"><img src="images/shadow_icon3.png" alt="" /></div>
                    <h6 className="section_sub_title">Clients testimonial</h6>
                    <h1 className="section_title">What our clients say about us</h1>
                    <p className="section_desc">CDC Homes is the best construction company. It has best team who are provideing best service possible.</p>
                </div>
                <div className="row">
                    <div className="col-12">
                    <div className='testimonial-grid'>
                            {
                                TestimonialData01.map(data =>
                                    <>
                                    <TestimonialCard01
                                            key={data.id}
                                            data={data}
                                        />
                                    </>
                                    
                                    )
                            }
</div>

                        {/* <!-- Add Pagination --> */}
                        {/* <div className="testimonial-pagination"></div> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial01;