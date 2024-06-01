import React from 'react'
import { FiAward, FiBriefcase } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import './info.css'


const info = () => {
    return (
        <div className='about__info grid'>
            <div className='about__box'>
                <div className="icons">
                    <FiAward />
                </div>
                <h3 className='about__title'>Experience</h3>
                <span className='about__subtitle'>2 Years Working</span>
            </div>
            <div className='about__box'>
                <div className="icons">
                    <FiBriefcase />
                </div>
                <h3 className='about__title'>Completed</h3>
                <span className='about__subtitle'>10+ Projects</span>
            </div>
            <div className='about__box'>
                <div className="icons">
                    <BiSupport />
                </div>
                <h3 className='about__title'>Support</h3>
                <span className='about__subtitle'>Online 24/7</span>
            </div>
        </div>
    )
}

export default info