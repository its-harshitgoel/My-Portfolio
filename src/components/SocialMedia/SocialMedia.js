import React from 'react';
import './SocialMedia.css';
import { SOCIAL_MEDIA_LINKS } from '../../utils/constants';

const SocialMedia = () => {
    return (
        <div className="home-about-social">
            <div className="wrapper">
                {SOCIAL_MEDIA_LINKS.map(({ name, link, icon }, index) => (
                    <a href={link} target="_blank" rel="noreferrer" key={index}>
                        <div className="button">
                            <div className="icon">
                            <i>{icon}</i>
                            </div>
                            <span>{name}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default SocialMedia;
