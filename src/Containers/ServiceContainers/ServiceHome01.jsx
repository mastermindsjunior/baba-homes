import React from 'react';
import ServiceCard01 from '../../Components/ServiceCards/ServiceCard01';

const ServiceHome01 = () => {
    const ServiceData = [
        {
            id: '1',
            img: 'images/services/s1.png',
            img02: 'images/services/ss1.png',
            number: 'ONE',
            bg: 'bg_1',
            title: 'Custom Home Construction & Highrise Projects'
        },
        {
            id: '2',
            img: 'images/services/s2.png',
            img02: 'images/services/ss2.png',
            number: 'TWO',
            bg: 'bg_2',
            title: 'Residential Housing & Real Estate Development'
        },
        {
            id: '3',
            img: 'images/services/s3.png',
            img02: 'images/services/sbg3.png',
            number: 'THREE',
            bg: 'bg_3',
            title: 'Commercial Spaces & Luxury Home Design'
        }        
    ];

    return (
        <div className="service section py-5">
        <div className="section-header">
        <h6 className="section_sub_title text-center">CDC Homes</h6>
        <h1 className="section_title text-center">Why Choose CDC Homes?</h1>
        </div>
            <div className="container-fluid g-0 mt-5">
                <div className="row g-3 pt-5 px-5">

                <div className='col-md-4 col-12 whyChooseBox '>
                        <div className=' text-center provideItem '>
                          <img src="/images/p1.png" alt="mars" />
                          <h4 className=' whyChooseHead'>Expert Custom Home Builders</h4>
                        </div>
  
                      </div>
                <div className='col-md-4 col-12 whyChooseBox '>
                        <div className=' text-center provideItem '>
                          <h4 className=' whyChooseHead'>High-Quality Construction Services</h4>
                          <img src="/images/p1.png" alt="mars" />
                        </div>

                      </div>
                <div className='col-md-4 col-12 whyChooseBox '>
                        <div className=' text-center provideItem '>
                          <img src="/images/p1.png" alt="mars" />
                          <h4 className=' whyChooseHead'>Transparent & Reliable Process</h4>
                        </div>

                      </div>


                </div>
            </div>
        </div>
    );
};

export default ServiceHome01;