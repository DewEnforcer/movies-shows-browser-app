import React from 'react'
import {NavLink} from "react-router-dom"

export default function NavItem({path, label, className = null}) {
    let cls = "nav-link";
    if (className) cls = `${cls}  ${className}`;

    return (
        <li className="nav-item">
            <NavLink className={cls} to={path}>{label}</NavLink>
        </li>
    )
}
