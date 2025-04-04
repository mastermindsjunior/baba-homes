import React, { Suspense } from 'react';
import Loader from '../../Components/common/Loader';
import PageHeader from '../../Components/common/PageHeader';
import { Helmet } from 'react-helmet';
// import ProjectsContainers01 from '../../Containers/ProjectContainers/ProjectsContainers01';

const ProjectsContainers01 = React.lazy(() => import("../../Containers/ProjectContainers/ProjectsContainers01"));

const Projects01 = () => {
    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Projects' heading='Projects' />

            <Suspense fallback={<Loader />}>

                <ProjectsContainers01 />
            </Suspense>
            <Helmet>
            <title>
      See Our Work | Top Home Building Projects in Edmonton
  </title>
  <meta
      name="description"
      content="Explore our custom home projects in Edmonton, AB. See how Royal Villa Homes brings dream homes to life with expert craftsmanship and personalized designs."
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
  <meta name="twitter:title" content="See Our Work | Top Home Building Projects in Edmonton" />
  <meta
      name="twitter:description"
      content="Explore our custom home projects in Edmonton, AB. See how Royal Villa Homes brings dream homes to life with expert craftsmanship and personalized designs."
  />
  <meta name="twitter:image" content="/images/logo.jpg" /> 
            </Helmet>
        </>
    );
};

export default Projects01;