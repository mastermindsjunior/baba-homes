import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import ServiceContainer02 from '../../Containers/ServiceContainers/ServiceContainer02';

const Services02 = () => {
    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Services' heading='Services' />
            <ServiceContainer02 />
        </>
    );
};

export default Services02;