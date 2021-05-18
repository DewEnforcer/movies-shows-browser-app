import React, {useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import shaka from 'shaka-player';

import errTexts from "../texts/errorTexts";

export default function MoviePlayer({history}) { //wireframe 3

	const videoRef = useRef();
	const headingRef = useRef();

	const [isPlaying, setIsPlaying] = useState(false);

	let fadeOutInterval;

	useEffect(() => {
		const streamURL = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
		const fallbackStreamURL = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
		const videoEl = videoRef.current;
		const videoPlayer = new shaka.Player(videoEl);

		
		videoPlayer.addEventListener("error", onErrorEvent)

		//user can control the video play state by just pressing spacebar, therefore the heading funcs wouldnt get triggered due to no mouse movement, trigger them manually here
		videoEl.addEventListener("playing", () => {
			setIsPlaying(true);
			fadeOutHeading();
		});
		videoEl.addEventListener("pause", () => {
			setIsPlaying(false);
			popInHeading();
		});
		
		loadVideo(videoPlayer, streamURL, fallbackStreamURL)
		return () => { //prevent memory leaks
			videoEl.removeEventListener("playing");
			videoEl.removeEventListener("pause");
		}
	});

	const loadVideo = async (videoPlayer, streamUrl, fallbackUrl = null) => {
		try {
			await videoPlayer.load(streamUrl);
		} catch (error) { //for some reason the url provided doesnt work due to cors, therefore to prevent user dissatisfaction, fallback to mp4 source (if there is any)
			onError(error)
			if (fallbackUrl) return loadVideo(videoPlayer, fallbackUrl);
		}
	}

	//error handlers
	const onErrorEvent = event => {
		onError(event.detail);
	  }
  
	const onError = error => {
		console.error(error);
		toast.error(errTexts.VIDEO_PLAYER_SOURCE_LOADING_ERR);
	}
	//heading controls
	const headingFadeHandler = () => {
		clearInterval(fadeOutInterval);

		popInHeading();
		if (!isPlaying) return;
		fadeOutHeading();
	}

	const popInHeading = () => {//controls pop in instantly, do the same with heading
		const headingEl = headingRef.current;
		if (!headingEl) return;
		headingEl.style.opacity = 1;
	}
	const fadeOutHeading = () => { //controls fade out after some time, do the same with heading
		const headingEl = headingRef.current;
		if (!headingEl) return;
		fadeOutInterval = setTimeout(() => {
			headingEl.style.opacity = 0;
		}, 2500)
	}
	//nav controls
	const handleExitVideo = () => history.goBack();

	return (
		<div className="video_container" onMouseMove={headingFadeHandler}>
			<div ref={headingRef} className="video_player_heading">
				<h2>{history.location.state.title}</h2>
				<button type="button" className="btn_exit_video" onClick={handleExitVideo}>X</button>
			</div>
			<video 
				ref={videoRef}
				className="video_player"
				controls
			/>
		</div>
	)
}