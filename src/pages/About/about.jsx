import Banner from '../../components/Banner/index.jsx'
import nature2 from '../../images/nature2.PNG'
import Collapse from '../../components/Collapse/index.jsx'
import '../../styles/about-style/about.css'
import dataAbout from '../../dataAbout.json'

function About() {
    return (
        <div>
            <Banner imageSrc={nature2} showText={false}/>
            <div className='collapse-container'>
                {dataAbout.map((e) => ( 
                    <Collapse key={e.id} title={e.title} description={e.description}/>
                ))}
            </div>
        </div>
    )
}

export default About