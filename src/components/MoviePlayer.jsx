import React from 'react'
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

export default function MoviePlayer() {

    return (
        <div className="video_container">
            <ShakaPlayer autoPlay src={'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8'} style={{width: "100vw", height: "100vh", backgroundColor: "#000"}} />
        </div>
    )
}