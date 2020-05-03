import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div 
        className='background-image'
        style={{
        backgroundImage: `url(${imageUrl})`
        }} />
        <di className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </di>
    </div>
);

export default MenuItem;