import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import ProjectDetailsContainer from '../../Containers/ProjectContainers/ProjectDetailsContainer';

const ProjectDetails = () => {
    return (
        <>
            <PageHeader activeClass02='active' routeName01='Projects' routeName02='Projects Details' heading='Modern Pent House' />

            <ProjectDetailsContainer />

        </>
    );
};

export default ProjectDetails;