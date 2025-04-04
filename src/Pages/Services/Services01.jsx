import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import ServiceContainer01 from '../../Containers/ServiceContainers/ServiceContainer01';
import { Helmet } from 'react-helmet';

const Services01 = () => {
    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Residential' heading='Residential' />
            <ServiceContainer01 />

            <Helmet>
            <title>
      Residential Construction in Edmonton, AB | Custom Home Builders
  </title>
  <meta
      name="description"
      content="CDC Homes offers expert residential construction services in Edmonton, AB. Build your dream home with our personalized designs and superior craftsmanship"
  />
  
  <meta
      name="keywords"
      content="top home builder,
      best home builder,
      best home builders,
      builders in edmonton,
      best house builders,
      top home builders,
      custom home builders edmonton,
      best custom home builders,
      best quality home builders,
      top home builder,
      houses to be moved edmonton,
      top 10 list new home builders,
      home builders edmonton,
      edmonton home builders,
      edmonton builders,
      new home builders edmonton,
      best new home builders,
      the best home builders,
      best new home builder,
      top rated new home builders,
      what home builder is the best,
      top house builders,
      top 10 house builders"
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
  <meta name="twitter:title" content="Residential Construction in Edmonton, AB | Custom Home Builders" />
  <meta
      name="twitter:description"
      content="Royal Villa Homes offers expert residential construction services in Edmonton, AB. Build your dream home with our personalized designs and superior craftsmanship"
  />
  <meta name="twitter:image" content="/images/logo.jpg" /> 
            </Helmet>

        </>
    );
};

export default Services01;