import React from 'react'
import { FiAward, FiBriefcase, } from "react-icons/fi";
import { RiGraduationCapLine } from "react-icons/ri";

import './info.css'


const info = () => {
    return (
        <div className='about__info grid'>
            <div className='about__box'>
                <div className="icons">
                    <FiAward style={{ fontSize: '2rem', color: 'blue' }} />
                </div>
                <h3 className='about__title'>Experience</h3>
                <span className='about__subtitle'>Fresher</span>
            </div>
            <div className='about__box'>
                <div className="icons">
                    <FiBriefcase style={{ fontSize: '2rem', color: 'blue' }} />
                </div>
                <h3 className='about__title'>Completed</h3>
                <span className='about__subtitle'>5+ Projects</span>
            </div>
            <div className='about__box'>
                <div className="icons">
                    <RiGraduationCapLine style={{ fontSize: '2rem', color: 'blue' }} />
                </div>
                <h3 className='about__title'>Education</h3>
                <span className='about__subtitle'>Scaler School Of Technology</span>
            </div>
        </div>
    )
}

export default info