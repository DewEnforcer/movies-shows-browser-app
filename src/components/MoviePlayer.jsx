import React, { Component } from 'react'
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

export default class MoviePlayer extends Component {
    render() {
        return (
            <div className="video_container">
                <ShakaPlayer style={{height: "100vh"}} autoPlay src={'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8'}/>
            </div>
        )
    }
}
