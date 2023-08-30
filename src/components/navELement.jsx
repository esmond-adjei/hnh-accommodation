import React from 'react';

export const NavElement = ({icon, title, handleFunction}) => {
    return (
        <div className="side-nav-icon" onClick={(e) => handleFunction}>
            <img src={icon} className="icon" alt={title} />
            <p>{title}</p>
        </div>
    )
}