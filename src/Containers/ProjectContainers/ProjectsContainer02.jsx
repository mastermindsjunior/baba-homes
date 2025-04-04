import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard02 from '../../Components/ProjectElements/ProjectCard02';
import Banner from '../Banner';

const ProjectsContainer02 = () => {
    const ProjectData02 = [
        {
            id: '1',
            img: 'images/team/Project_2_Images/1.png',
            tag: 'residential business',
            title: 'Large Garden Lodge',
            city: 'NEW YORK',
        },
        {
            id: '2',
            img: 'images/team/Project_2_Images/2.png',
            tag: 'highrise',
            title: 'Commercial Building',
            city: 'NEW YORK',
        },
        {
            id: '3',
            img: 'images/team/Project_2_Images/3.png',
            tag: 'residential commercial',
            title: 'Modern Pent House',
            city: 'NEW YORK',
        },
        {
            id: '4',
            img: 'images/team/Project_2_Images/4.png',
            tag: 'highrise commercial',
            title: 'Large Swiming Pool',
            city: 'NEW YORK',
        },
        {
            id: '5',
            img: 'images/team/Project_2_Images/5.png',
            tag: 'business highrise',
            title: 'Highrise Architecture',
            city: 'NEW YORK',
        },
        {
            id: '6',
            img: 'images/team/1.png',
            tag: 'residential',
            title: 'Curve Sky Tower',
            city: 'NEW YORK',
        },
        {
            id: '7',
            img: 'images/team/2.png',
            tag: 'residential',
            title: 'Shopping Mall',
            city: 'NEW YORK',
        },
        {
            id: '8',
            img: 'images/team/3.png',
            tag: 'business residential',
            title: 'Wonderful Bridge',
            city: 'NEW YORK',
        },
        {
            id: '9',
            img: 'images/team/1.png',
            tag: 'commercial residential',
            title: 'Small House Area',
            city: 'NEW YORK',
        },
        {
            id: '10',
            img: 'images/team/5.png',
            tag: 'highrise residential',
            title: 'Modern Architecture',
            city: 'NEW YORK',
        },

    ];

    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.element-item',
            percentPosition: true,
            // layoutMode: 'packery',
            // masonry: {
            //     columnWidth: '.grid-sizer'
            // },
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            // columnWidth: '.grid-sizer',
        })

        // cleanup
        return () => Isotope.current.destroy()
    }, []);

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
            ? Isotope.current.arrange({ filter: `*` })
            : Isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey]);

    const handleFilterKeyChange = key => () => setFilterKey(key);
    return (
        <div class="main_wrapper">
            <div class="project_iso project_iso1 pd_tp_110 pb-0">
                <div class="container-fluid g-0">
                    <div class="row g-0">
                        <div class="col">
                            <div class="button-group filters-button-group">
                                <button className="button" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                                <button className="button" onClick={handleFilterKeyChange('commercial')}>Commercial <sup className="filter-count"></sup></button>
                                <button className="button" onClick={handleFilterKeyChange('highrise')}>Highrise <sup className="filter-count"></sup></button>
                                <button className="button" onClick={handleFilterKeyChange('residential')}>Residential <sup className="filter-count"></sup></button>
                                <button className="button" onClick={handleFilterKeyChange('business')}>Business <sup className="filter-count"></sup></button>
                            </div>

                            <div class="grid grid-5">

                                {
                                    ProjectData02.map(data => <ProjectCard02
                                        key={data.id}
                                        data={data}
                                    />)
                                }

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Banner
                title='Is Your House Secured Enough? Call Us to install Security Devices'
                heading='Call Us Anytime'
                phone='(+123)987.654.32'
                bannerType='banner banner_bg_color'
            />
        </div>
    );
};

export default ProjectsContainer02;