import React from 'react'
import NavItem from './NavItem'

export default function Navigation({navItems}) {
    return (
        <ul>
            {navItems.map(n => <NavItem key={n.id} className={n.className} path={n.path} label={n.label} icon={n.icon}/>)}
        </ul>
    )
}
