import React from 'react';
import PageHeader from '../Components/common/PageHeader';
import Partners02 from '../Components/Partners/Partners02';
import TopFeatures from '../Components/TopFeatures';
import Banner from '../Containers/Banner';
import ExperienceAbout from '../Containers/Experiences/ExperienceAbout';
import FunFactAbout from '../Containers/Funfacts/FunFactAbout';
import Team from '../Containers/Team';
import Testimonial01 from '../Containers/Testimonials/Testimonial01';
import { Helmet } from 'react-helmet';

const About = () => {
    const AboutBannerData = {
        title: 'Builderrine is proud to serve you 24/7. Just Call Us when you need',
        heading: 'Call Us Anytime',
        phone: '(780) 710-3640'
    }
    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='About Us' heading='About' />

            <div className="main_wrapper">
                {/* <TopFeatures /> */}

                <ExperienceAbout />

                {/* <FunFactAbout /> */}
                <section className=' container row g-5' style={{margin:"auto"}}>
                    <div className="col-md-8">
                        <h4 className='section_title'>Our Legacy of Quality Construction</h4>
                        <p className='section_desc'>With years of experience in residential and commercial construction, our team takes pride in delivering top-rated home building services in Edmonton. From modern architectural designs to energy-efficient homes, we build with precision and integrity. <br />
                        Our commitment to quality craftsmanship and customer satisfaction sets us apart. We work closely with clients to bring their vision to life, ensuring every detail meets the highest standards. Whether you're looking for a custom-built dream home or a commercial space designed for success, our expertise and dedication guarantee exceptional results. Building with excellence, creating with passion.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/images/about/houses-2.jpg" alt="" />
                    </div>
                </section>


                {/* <Team pb='pd_btom_110' /> */}

                <Banner
                    title='Let’s Build Your Dream Home Together'
                    heading='From concept to completion, CDC Homes is your partner in building the perfect home. Whether it’s a custom home, home renovation, or luxury home construction in Edmonton, we bring expertise and passion to every project.'
                    phone='(780) 710-3640'
                    bannerType='banner type_3'
                />

                {/* <Testimonial01 pb='pd_btom_110' /> */}
                {/* <Partners02 pt='pd_tp_110' /> */}
            </div>
            <Helmet>
            <title>
      Our Story | Top Custom Home Builders in Edmonton, AB
  </title>
  <meta
      name="description"
      content="Learn about CDC Homes, the top home builder in Edmonton, AB. Discover our commitment to quality craftsmanship, custom home design, and client satisfaction"
  />
  
  <meta
      name="keywords"
      content='
  "Residential construction Sherwood Park",
  "Commercial building construction Sherwood Park",
  "Home builders Sherwood Park",
  "Custom homes Sherwood Park",
  "Commercial contractors Sherwood Park",
  "General contractors Sherwood Park",
  "Construction services Sherwood Park",
  "Custom home construction Sherwood Park",
  "Commercial renovation Sherwood Park",
  "Residential remodeling Sherwood Park",

  "Best residential construction services in Sherwood Park",
  "Commercial building contractors near Pembina Road, Sherwood Park",
  "Affordable home builders in Sherwood Park, AB",
  "Top-rated general contractors in Sherwood Park",
  "Custom home construction experts in Sherwood Park",
  "Reliable commercial renovation services in Sherwood Park",
  "High-quality residential remodeling in Sherwood Park",
  "Experienced commercial construction companies in Sherwood Park",
  "Best custom home builders near 152, 134 Pembina Road, Sherwood Park",
  "Professional construction services for homes and businesses in Sherwood Park"
'
  />
  <meta property="og:title" content="Top Home Builder in Edmonton, AB | Royal Villa Homes" />
  <meta
      property="og:description"
      content="Royal Villa Homes is the top home builder in Edmonton, AB, offering custom home design, quality construction, and exceptional craftsmanship to create your dream home."
  />
  <meta property="og:image" content="/images/logo.jpg" /> 
  <meta property="og:url" content="https://royalvillahomes.ca" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Our Story | Top Custom Home Builders in Edmonton, AB" />
  <meta
      name="twitter:description"
      content="Learn about Royal Villa Homes, the top home builder in Edmonton, AB. Discover our commitment to quality craftsmanship, custom home design, and client satisfaction"
  />
  <meta name="twitter:image" content="/images/logo.jpg" /> 
            </Helmet>
        </>
    );
};

export default About;