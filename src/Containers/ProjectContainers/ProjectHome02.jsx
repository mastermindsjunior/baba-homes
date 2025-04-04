import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard01 from '../../Components/ProjectElements/ProjectCard01';

const ProjectHome02 = () => {
    const ProjectHomeData02 = [
        {
            id: '1',
            img: 'images/team/1.png',
            tag: 'residential business',
            title: 'Large Garden Lodge',
            city: 'NEW YORK',
        },
        {
            id: '2',
            img: 'images/team/2.png',
            tag: 'highrise',
            title: 'Commercial Building',
            city: 'NEW YORK',
        },
        {
            id: '3',
            img: 'images/team/3.png',
            tag: 'residential commercial',
            title: 'Modern Pent House',
            city: 'NEW YORK',
        },
        {
            id: '4',
            img: 'images/team/5.png',
            tag: 'highrise commercial',
            title: 'Large Swiming Pool',
            city: 'NEW YORK',
        },
        {
            id: '5',
            img: 'images/team/9.png',
            tag: 'business highrise',
            title: 'Highrise Architecture',
            city: 'NEW YORK',
        },
        {
            id: '6',
            img: 'images/team/10.png',
            tag: 'residential',
            title: 'Curve Sky Tower',
            city: 'NEW YORK',
        },
        {
            id: '7',
            img: 'images/team/11.png',
            tag: 'residential',
            title: 'Shopping Mall',
            city: 'NEW YORK',
        },
        {
            id: '8',
            img: 'images/team/12.png',
            tag: 'business residential',
            title: 'Wonderful Bridge',
            city: 'NEW YORK',
        },
        {
            id: '9',
            img: 'images/team/13.png',
            tag: 'commercial residential',
            title: 'Small House Area',
            city: 'NEW YORK',
        },
        {
            id: '10',
            img: 'images/team/14.png',
            tag: 'highrise residential',
            title: 'Modern Architecture',
            city: 'NEW YORK',
        },
        {
            id: '11',
            img: 'images/team/16.png',
            tag: 'business highrise',
            title: 'Large Swiming Pool',
            city: 'NEW YORK',
        },
        {
            id: '12',
            img: 'images/team/15.png',
            tag: 'residential',
            title: 'Modern Pent House',
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
        <div className="project_iso project_iso_bg">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section_header section_header_white text-center">
                            <div className="shadow_icon"><img src="images/shadow_icon4.png" alt="" /></div>
                            <h6 className="section_sub_title">OUR PROJECTS</h6>
                            <h1 className="section_title">Our Most Popular Projects</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/* <Tabs>
                            <TabList className="button-group filters-button-group">
                                <Tab className="button is-checked" data-filter="*">All</Tab>
                                <Tab className="button" data-filter=".commercial">Commercial</Tab>
                                <Tab className="button" data-filter=".highrise">Highrise</Tab>
                                <Tab className="button" data-filter=".residential">Residential</Tab>
                                <Tab className="button" data-filter=".business">Business</Tab>
                            </TabList>

                            <div className="grid grid-4 gutter-15">
                                <TabPanel>
                                    <div className="element-item residential business">
                                        <div className="teambox">
                                            <img src="images/team/1.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Large Garden Lodge</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="element-item highrise">
                                        <div className="teambox">
                                            <img src="images/team/2.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Commercial Building</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="element-item residential commercial">
                                        <div className="teambox">
                                            <img src="images/team/3.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Modern Pent House</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item highrise commercial">
                                        <div className="teambox">
                                            <img src="images/team/5.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Large Swiming Pool</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="element-item business highrise">
                                        <div className="teambox">
                                            <img src="images/team/9.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Highrise Architecture</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="element-item residential">
                                        <div className="teambox">
                                            <img src="images/team/10.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Curve Sky Tower</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item residential">
                                        <div className="teambox">
                                            <img src="images/team/11.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Shopping Mall</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item business residential">
                                        <div className="teambox">
                                            <img src="images/team/12.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Wonderful Bridge</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item commercial residential">
                                        <div className="teambox">
                                            <img src="images/team/13.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Small House Area</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item business highrise">
                                        <div className="teambox">
                                            <img src="images/team/16.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Large Swiming Pool</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item residential">
                                        <div className="teambox">
                                            <img src="images/team/15.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Modern Pent House</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="element-item business highrise">
                                        <div className="teambox">
                                            <img src="images/team/9.png" alt="" />
                                            <div className="teambox_inner">
                                                <div className="team_social">
                                                    <div className="share"><i className="ion-android-share-alt"></i></div>
                                                    <ul>
                                                        <li className="facebook"><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                        <li className="twitter"><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                        <li className="instagram"><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                        <li className="linkedin"><a href="#"><i className="ion-social-linkedin-outline"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="teambox_intro">
                                                    <div className="team_flex team_size">
                                                        <h6>NEW YORK</h6>
                                                        <h5><a href="/project-details">Highrise Architecture</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>











                            </div>
                        </Tabs> */}
                        <div className="button-group filters-button-group button_color">
                            <button className="button" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('commercial')}>Commercial <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('highrise')}>Highrise <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('residential')}>Residential <sup className="filter-count"></sup></button>
                            <button className="button" onClick={handleFilterKeyChange('business')}>Business <sup className="filter-count"></sup></button>

                            <div className="grid grid-4 gutter-15">
                                {
                                    ProjectHomeData02.map(data => <ProjectCard01
                                        key={data.id}
                                        data={data}
                                    />)
                                }

                            </div>
                        </div>

                    </div>
                    <div className="col-12 box_bottom">
                        <p>If you want to see all the Builderrine projects,</p><a href="/project">Click Here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHome02;