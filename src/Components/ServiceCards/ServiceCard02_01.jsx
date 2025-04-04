import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

const ServiceCard02_01 = ({ data }) => {
    const { img02, tag, title } = data;
    const [open, setOpen] = useState(false);
    const infoRef = useRef();
    gsap.registerPlugin();

    useEffect(()=> {
        console.log(open, infoRef.current);
        
        if(open && infoRef.current) {
            gsap.set(infoRef.current, {pointerEvents:"all"})
            gsap.to(infoRef.current, {scale:1, opacity:1})
        }
        else {
            gsap.set(infoRef.current, {pointerEvents:"none"})
            gsap.to(infoRef.current, {scale:0, opacity:0})
        }
    },[open])

    return (
        <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="service_inner_block">
                <img src={img02} alt="" />

                <div className="service_content">
                    <h4>{tag}</h4>
                    <p>{title}</p>
                    <button onClick={() => setOpen(true)}>READ MORE <i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                </div>

                <div ref={infoRef} className="moreInfo">
                        <button onClick={() => setOpen(false)} className='closeBtn'>X</button>
                        <div className='info-content'>
                            <h6>{data.info_title}</h6>
                            <p>{data.info_desc}</p>
                            <h6>{data.info_title2}</h6>
                            <ul>
                                {data.info_list.map((item, idx) => (
                                    <li key={idx}><span>{item.name}</span>{item.desc}</li>
                                ))}
                            </ul>
                            <p><a href="/contact">{data.info_desc2}</a></p>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCard02_01;