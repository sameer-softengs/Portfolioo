"use client";

import { useRef, useState } from "react";

export default function ProjectVideo({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [speed, setSpeed] = useState(1);

  function changeSpeed(rate: number) {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = rate;
    videoRef.current.defaultPlaybackRate = rate;
    setSpeed(rate);
  }

  return (
    <div className="project-video-player">
      <video
        ref={videoRef}
        className="project-video"
        controls
        playsInline
        preload="none"
        poster={poster}
        aria-label="Paint Application demonstration"
        onRateChange={() => setSpeed(videoRef.current?.playbackRate ?? 1)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support video. <a href={src}>Download the demonstration.</a>
      </video>
      <div className="project-playback-controls" role="group" aria-label="Video playback speed">
        <span>Playback speed</span>
        {[1, 2, 3].map((rate) => (
          <button key={rate} type="button" aria-pressed={speed === rate} aria-label={`Play at ${rate} times speed`} onClick={() => changeSpeed(rate)}>{rate}×</button>
        ))}
      </div>
    </div>
  );
}
