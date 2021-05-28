import React from 'react'
import {NavLink} from "react-router-dom"

export default function NavItem({path, label, className = null}) {
    let cls = "nav_link";
    if (className) cls = `${cls}  ${className}`;

    return (
        <li className="nav_item">
            <NavLink className={cls} to={path}>{label}</NavLink>
        </li>
    )
}
