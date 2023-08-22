import Banner from '../../components/Banner/index.jsx'
import React, { useState, useEffect } from 'react';
import nature2 from '../../images/nature2.PNG'
import Collapse from '../../components/Collapse/index.jsx'
import '../../styles/about-style/about.css'
import dataAbout from '../../dataAbout.json'

function About() {
    const [windowW, setWindowW] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => {
            setWindowW(window.innerWidth);
        };
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);
    let bannerH = 15;
    if(windowW < 700 && windowW > 400) {
        bannerH = 30
    }else if (windowW < 400){
        bannerH = 20
    }
   
    return (
        <div className='about-container'>
            <Banner height={`${bannerH}rem`} imageSrc={nature2} showText={false}/>
            <div className='collapse-container'>
                {dataAbout.map((e) => ( 
                    <Collapse key={e.id} title={e.title} description={e.description}/>
                ))}
            </div>
            <div className='push'>

            </div>
        </div>
    )
}

export default About