import React from 'react'
import NavItem from './NavItem'

export default function Navigation({navItems}) {
    return (
        <ul className="bg-dark">
            {navItems.map(n => <NavItem key={n.id} className={n.className} path={n.path} label={n.label}/>)}
        </ul>
    )
}
