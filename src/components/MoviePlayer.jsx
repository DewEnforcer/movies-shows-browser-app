import React, { Component } from 'react'
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

export default class MoviePlayer extends Component {
    render() {
        return (
            <div className="video_container">
                <ShakaPlayer style={{height: "100vh"}} autoPlay src={'http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8'}/>
            </div>
        )
    }
}
