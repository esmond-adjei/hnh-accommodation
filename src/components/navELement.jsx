import React from 'react';

export const NavElement = ({icon, title, handleFunction}) => {
    return (
        <div className="side-nav-icon" onClick={(e) => handleFunction(e)}>
            <object id="svg-object" aria-label={title} type="image/svg+xml" data={icon} />
            <p>{title}</p>
        </div>
    )
}