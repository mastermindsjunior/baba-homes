import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard02 from '../../Components/ProjectElements/ProjectCard02';

const ProjectHome01 = () => {
    const ProjectHomeData01 = [
        {
            id: '1',
            img: 'images/team/Project_2_Images/3.png',
            tag: 'residential business',
            title: 'Large Garden Lodge',
            city: 'NEW YORK',
        },
        {
            id: '2',
            img: 'images/team/Project_2_Images/4.png',
            tag: 'highrise',
            title: 'Commercial Building',
            city: 'NEW YORK',
        },
        {
            id: '3',
            img: 'images/team/Project_2_Images/5.png',
            tag: 'residential commercial',
            title: 'Modern Pent House',
            city: 'NEW YORK',
        },
        {
            id: '4',
            img: 'images/team/Project_2_Images/1.png',
            tag: 'highrise commercial',
            title: 'Large Swiming Pool',
            city: 'NEW YORK',
        },
        {
            id: '5',
            img: 'images/team/Project_2_Images/2.png',
            tag: 'business highrise',
            title: 'Highrise Architecture',
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
        <div className="section project_iso project_iso1">
            <div className="container-fluid g-0">
                <div className="section_header text-center">
                    <div className="shadow_icon"><img className='worker' src="images/about/shadow_icon1.png" alt="" /></div>
                    <h6 className="section_sub_title">ABOUT CDC HOMES</h6>
                    <h1 className="section_title">Our Most Popular Projects</h1>
                </div>
                <div className="row g-0">
                    <div className="col">


                        <div className="button-group filters-button-group">
                            <button className="button" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('commercial')}>Commercial <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('highrise')}>Highrise <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('residential')}>Residential <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('business')}>Business <sup className="filter-count"></sup></button>

                        </div>

                        <div class="grid grid-5">
                            {
                                ProjectHomeData01.map(data => <ProjectCard02
                                    key={data.id}
                                    data={data}
                                />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHome01;