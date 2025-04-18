import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../../Containers/Banner';
import Experience from '../../Containers/Experiences/Experience';
import FunFact01 from '../../Containers/Funfacts/FunFact01';
import ServiceHome01 from '../../Containers/ServiceContainers/ServiceHome01';
import Testimonial01 from '../../Containers/Testimonials/Testimonial01';
import Slider from '../../Containers/ThemeSliders/Slider';
import Slider02 from '../../Containers/ThemeSliders/Slider02';
import Testimonial02 from '../../Containers/Testimonials/Testimonial02';

const Home01 = () => {
    return (
        <div className="main_wrapper">
            <Slider />
            {/* <Slider02 /> */}
            <Experience />
            <ServiceHome01 />
            {/* <FunFact01 /> */}

            {/* <ProjectHome01 /> */}

            <Banner
                    title='Let’s Build Your Dream Home Together'
                    heading='From concept to completion, CDC Homes is your partner in building the perfect home. Whether it’s a custom home, home renovation, or luxury home construction in Edmonton, we bring expertise and passion to every project.'
                phone='(780) 710-3640'
                bannerType='banner type_3'
            />

            {/* <Testimonial01 pb='pd_btom_80' /> */}
            <Testimonial02/>

            {/* <Blog /> */}
            {/* <Partners01 /> */}
            <Helmet>
            <title>
      Top Home Builder in Edmonton, AB | CDC Homes
  </title>
  <meta
      name="description"
      content="CDC Homes is the top home builder in Edmonton, AB, offering custom home design, quality construction, and exceptional craftsmanship to create your dream home."
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
  <meta property="og:title" content="Top Home Builder in Edmonton, AB | CDC Homes" />
  <meta
      property="og:description"
      content="CDC Homes is the top home builder in Edmonton, AB, offering custom home design, quality construction, and exceptional craftsmanship to create your dream home."
  />
  <meta property="og:image" content="/images/logo.jpg" /> 
  <meta property="og:url" content="https://royalvillahomes.ca" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Top Home Builder in Edmonton, AB | CDC Homes" />
  <meta
      name="twitter:description"
      content="CDC Homes is the top home builder in Edmonton, AB, offering custom home design, quality construction, and exceptional craftsmanship to create your dream home."
  />
  <meta name="twitter:image" content="/images/logo.jpg" /> 
            </Helmet>
        </div>
    );
};

export default Home01;