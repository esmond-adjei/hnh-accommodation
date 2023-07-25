import React from 'react';

export const NavElement = ({icon, title, handleFunction}) => {
    return (
        <div className="side-nav-icon" onClick={(e) => handleFunction(e)}>
            <img src={icon} alt={title} width="30px" />
            <p>{title}</p>
        </div>
    )
}