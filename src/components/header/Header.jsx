import React from 'react'
import { useLocation } from 'react-router'
import Navigation from './Navigation'

const navItems = [
    {id: 1, path: "/", label: "Home"},
    {id: 2, path: "/search", label: "Search"},
]

export default function Header() {
    const {pathname} = useLocation();

    if (pathname.includes("play")) return null; //Header wont be rendered if user is located on the video player section

    return (
        <div className="header">
            <Navigation navItems={navItems}/>
        </div>
    )
}
