import React, { useLayoutEffect, useRef, useState } from "react";
import LazyLoad from 'react-lazyload';


const ProjectCard02 = ({ data }) => {
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    let monitorWidth = windowSize.current[0];

    // console.log(monitorWidth);


    useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);

    let elHeight = Number(dimensions.height);
    console.log(typeof elHeight);

    const { img, city, title, tag } = data;

    return (
        <div className={`element-item ${tag}`}>
            <div className="teambox">
                <LazyLoad height={monitorWidth <= 600 ? 600 : monitorWidth <= 1536 ? 400 : monitorWidth >= 1918 ? 500 : 400} once>
                    <img src={img} alt="" />
                </LazyLoad>

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
                            <h6>{city}</h6>
                            <h5><a href="/project-details">{title}</a></h5>
                            {/* <br />
                            <h2>Width: {windowSize.current[0]}</h2>
                            <h2>Height: {windowSize.current[1]}</h2> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard02;