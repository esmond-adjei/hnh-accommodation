import React from 'react';
import './styles/navElement.css'
import { Link } from 'react-router-dom';

export const NavElement = ({element}) => {
    return (
        <Link to={element.link} className=".side-nav-icon" onClick={(e) => element.handleFunction}>
            <img src={element.icon} className=".icon" alt={element.title} />
            <small>{element.name}</small>
        </Link>
    )
}