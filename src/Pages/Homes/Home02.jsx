import React from 'react';
import Partners02 from '../../Components/Partners/Partners02';
import BlogHome02 from '../../Containers/Blogs/BlogHome02';
import ContactHome02 from '../../Containers/Contacts/ContactHome02';
import Experience02 from '../../Containers/Experiences/Experience02';
import FunFact02 from '../../Containers/Funfacts/FunFact02';
import ProjectHome02 from '../../Containers/ProjectContainers/ProjectHome02';
import Service02 from '../../Containers/ServiceContainers/Service02';
import Team from '../../Containers/Team';
import Testimonial02 from '../../Containers/Testimonials/Testimonial02';
import Slider02 from '../../Containers/ThemeSliders/Slider02';

const Home02 = () => {
    return (
        <div className="main_wrapper">
            <Slider02 />
            <Service02 />
            <Partners02 pt='pd_tp_sm_110' />
            <Experience02 />
            <Team pb='section' />
            <FunFact02 />

            <ProjectHome02 />

            <Testimonial02 />
            <BlogHome02 />
            <ContactHome02 />

        </div>
    );
};

export default Home02;