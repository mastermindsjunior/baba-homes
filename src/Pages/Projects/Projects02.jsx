import React from 'react';
import PageHeader from '../../Components/common/PageHeader';
import ProjectsContainer02 from '../../Containers/ProjectContainers/ProjectsContainer02';

const Projects02 = () => {
    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Projects' heading='Projects' />

            <ProjectsContainer02 />

        </>
    );
};

export default Projects02;