import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import ServiceContainer03 from '../../Containers/ServiceContainers/ServiceContainer03';

const ServiceDetails = () => {
    return (
        <>
            <PageHeader activeClass02='active' routeName01='Services' routeName02='Comertial Construction' heading='Comertial Construction' />
            <ServiceContainer03 />
        </>
    );
};

export default ServiceDetails;