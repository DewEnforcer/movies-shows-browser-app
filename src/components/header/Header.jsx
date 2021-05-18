import React from 'react'
import { useLocation } from 'react-router'
import Navigation from './Navigation'


export default function Header({navItems = []}) {
    const {pathname} = useLocation();

    if (pathname.includes("play")) return null; //Header wont be rendered if user is located on the video player section

    return (
        <div className="header">
            <Navigation navItems={navItems}/>
        </div>
    )
}
