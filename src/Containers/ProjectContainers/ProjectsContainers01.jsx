import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import MarqeeItem from './MarqeeItem';
import ProjectMasonaryGrid from './ProjectMasonaryGrid';
import ProjectYear from './ProjectYear';
import imageNames from '../../imageNames';

const ProjectsContainers01 = () => {
    const ProjectData01 = [
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

    const items = ['video/1.mp4','video/2.mp4', 'video/3.mp4', 'video/4.mp4', 'video/5.mp4', 'video/6.mp4'];

    const [currentImgs, setCurrentImgs] = useState([]);
    const [currentYear, setCurrentYear] = useState(null);

    useEffect(() => {
        console.log('clicked', currentYear);
        if (currentYear) {
            console.log(imageNames[0], new RegExp(`^${currentYear}-\\d+\\.jpg$`).test(imageNames[0]));
            
          const filteredImages = imageNames.filter((name) => 
            new RegExp(`^^${currentYear}-\\d+\\.jpg$`).test(name) // Matches year and .jpg extension
          );
          console.log(filteredImages); // Do something with the filtered images
          setCurrentImgs(filteredImages);
        }
        else {
            setCurrentImgs([]);
        }
        
      }, [currentYear]);

    return (
        <div className="main_wrapper">
            <div className="project_iso section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        </div>
                        <h5 className='heading'>
  Residential Construction Projects
</h5>
<p className='para'>
  Explore a collection of construction projects focused on building beautiful, sustainable homes.
</p>
{/* <div className='projects-grid'>
    <ProjectYear img={'images/projects/2024/2024-1.jpg'} year={'2024'} setCurrentYear={setCurrentYear}/>
</div> */}
                            <ProjectMasonaryGrid imgs={currentImgs}/>
                            <div className='space24'></div>
                            <Marquee direction={'left'} pauseOnHover={true}>
                            {items.map((item, i) => (
                            <MarqeeItem key={i} src={item}/>
                            ))}
                        </Marquee>

                            {/* <div className='comingSoon'>
                            <h2>COMING SOON</h2>
                            <p>We're working hard behind the scenes to bring you a showcase of all our incredible projects. </p>
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsContainers01;