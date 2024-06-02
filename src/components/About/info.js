import React from 'react';
import './info.css';
import { INFO_DATA } from '../../utils/constants';

const Info = () => {
    return (
        <div className='info-container'>
            <div className='about__info'>
                {INFO_DATA.map((infoItem, index) => (
                    <div key={index} className='about__box'>
                        <div className="icons-info">
                            {infoItem.icon}
                        </div>
                        <h3 className='about__title'>{infoItem.title}</h3>
                        <span className='about__subtitle'>{infoItem.subtitle}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Info;
